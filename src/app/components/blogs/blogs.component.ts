import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogPost: any;
  constructor(private route: ActivatedRoute, private postService: PostsService) { }
  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId !== null) {
      const Newdata = this.postService.getPostById(postId).subscribe((data) => {
        this.blogPost = data;
      });



    }


  }


}
