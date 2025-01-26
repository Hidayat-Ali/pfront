import { Component } from '@angular/core';

import { PostsService } from 'src/app/services/posts.service';
import * as Editor from 'ckeditor5-custom-build/build/ckeditor';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  Editor: any = Editor;
  userName: string = '';
  title: string = '';
  email: string = '';
  category: string = '';
  editorContent: string = '';

  constructor(public postService: PostsService) { }

  //   savePostToDb(): void {
  //     const postData = {
  //       username: this.userName,
  //       title: this.title,
  //       email: this.email,
  //       category: this.category,
  //       dec: this.editorContent
  //     };

  //     this.postService.createPost(postData).subscribe(
  //       (data) => {
  //         console.log('Post saved to DB:', data);

  //       },
  //       (err) => {
  //         console.error('Error saving post:', err);
  //       }
  //     );
  //   }

  //   onReady(editor: any) {
  //     console.log('Editor is ready!');
  //   }

  //   resetForm() {
  //     this.userName = '';
  //     this.title = '';
  //     this.email = '';
  //     this.category = '';
  //     this.editorContent = '';
}
// }
