import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css'],

})
export class LatestBlogComponent {
  constructor(private postService: PostsService) { }
  backgorundImageUrl: string = "https://images.pexels.com/photos/13952899/pexels-photo-13952899.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  blogPosts$: Observable<Post[]> | undefined;
  ngOnInit() {

    this.blogPosts$ = this.postService.getPosts();

  }

}
