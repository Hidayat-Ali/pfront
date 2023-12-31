import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Post } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogPost: any;
  postContent!: SafeHtml;
  constructor(private route: ActivatedRoute, private postService: PostsService, private sanitizer: DomSanitizer) { }
  ngOnInit() {
    const encodedTopicName = this.route.snapshot.paramMap.get('title');

    if (encodedTopicName !== null) {
      const topicName = decodeURIComponent(encodedTopicName);


      const Newdata = this.postService.getPostByName(topicName).subscribe((data) => {
        this.blogPost = data;

        this.postContent = this.sanitizer.bypassSecurityTrustHtml(this.blogPost.dec);

      });

      console.log(topicName);

    }


  }


}
