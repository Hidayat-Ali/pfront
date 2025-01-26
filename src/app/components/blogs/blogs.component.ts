import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostsService } from 'src/app/services/posts.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogPost: any;
  postContent: string = '';
  name: string = '';
  email: string = '';
  message: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    // Extract both 'id' and 'title' from the route parameters
    const postId = this.route.snapshot.paramMap.get('id'); // Get 'id' from the URL
    const postTitle = this.route.snapshot.paramMap.get('title'); // Get 'title' from the URL

    console.log('Post ID from URL:', postId); // Log the postId
    console.log('Post Title from URL:', postTitle); // Log the postTitle

    if (postId) {
      const id = Number(postId);  // Convert the string to a number
      console.log('Parsed postId:', id);  // Log the parsed ID

      if (!isNaN(id)) {
        this.fetchPostDetails(id); // Call fetchPostDetails with a valid ID
      } else {
        this.errorMessage = 'Invalid post ID';
        console.error('Invalid post ID');
      }
    } else {
      this.errorMessage = 'Post ID not found in URL';
      console.error('Post ID not found');
    }
  }

  // Fetch the blog post details
  fetchPostDetails(postId: any): void {
    this.postsService.getPostById(postId).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        if (response) {
          this.blogPost = response;
          this.postContent = response.content;
          console.log(this.postContent, 'Post content fetched');
        } else {
          this.errorMessage = 'Post not found';
          console.error('Post not found in the API response');
        }
      },
      (error: any) => {
        this.errorMessage = 'Error fetching post details';
        console.error('Error fetching post details:', error);
      }
    );
  }

  // This is an example method for posting comments (you can customize this)
  // addComment(): void {
  //   const comment = {
  //     name: this.name,
  //     email: this.email,
  //     message: this.message,
  //   };
  //   console.log('Posted comment:', comment);
  //   alert('Comment posted!');
  // }
}


