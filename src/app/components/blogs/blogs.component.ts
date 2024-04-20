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

  token: string | undefined;




  blogPost: any;
  postContent!: SafeHtml;
  constructor(private route: ActivatedRoute, private postService: PostsService, private sanitizer: DomSanitizer) { this.token = undefined; }
  ngOnInit() {
    const encodedTopicName = this.route.snapshot.paramMap.get('title');
    console.log('i am ere', encodedTopicName);


    if (encodedTopicName !== null) {
      const title = encodedTopicName ? encodedTopicName.replace(/-/g, ' ') : '';
      console.log(title);


      const Newdata = this.postService.getPostByName(title).subscribe((data) => {
        this.blogPost = data;
        console.log(data)
        this.postContent = this.sanitizer.bypassSecurityTrustHtml(this.blogPost.dec);

      });



    }

  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }


}
