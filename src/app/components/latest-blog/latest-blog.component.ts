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
  constructor(private postService: PostsService) { }
  @ViewChild('cardRow') cardRow!: ElementRef;
  splitTextBlogTitle!: SplitText
  backgorundImageUrl: string = "https://images.pexels.com/photos/13952899/pexels-photo-13952899.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  blogPosts$: Observable<Post[]> | undefined;

  ngOnInit() {

    this.blogPosts$ = this.postService.getPosts();
  }

  public formatTitleForLink(title: string | undefined): string {
    return title ? title.replace(/\s+/g, '-') : '';
  }
}


