import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';
import { SplitText } from 'src/app/splitText'
import Swiper from 'swiper';


@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css'],

})
export class LatestBlogComponent {
  blogPosts: Post[] = []; // Holds the array of posts
  backgroundImageUrl: string = 'https://images.pexels.com/photos/13952899/pexels-photo-13952899.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load';

  constructor(private postService: PostsService) { }

  ngOnInit() {
    // Subscribe to the observable to fetch posts
    this.postService.getPosts().subscribe(
      (response: any) => {
        this.blogPosts = response.posts; // Assign posts array to blogPosts
        console.log('Fetched posts:', this.blogPosts); // Log the fetched posts
      },
      (error) => {
        console.error('Error fetching posts:', error); // Log any errors
      }
    );
  }

  public formatTitleForLink(title: string | undefined): string {
    return title ? title.replace(/\s+/g, '-').toLowerCase() : '';
  }
  truncateText(text: string, wordLimit: number): string {
    if (!text) {
      return '';
    }
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  }
}


