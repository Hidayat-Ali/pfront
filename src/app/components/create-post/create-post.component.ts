import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  Editor = ClassicEditor;
  userName: string = '';
  title: string = '';
  email: string = '';
  category: string = '';
  editorContent: string = '';

  constructor(public postService: PostsService) { }

  savePostToDb(): void {
    const postData = {
      userName: this.userName,
      title: this.title,
      email: this.email,
      category: this.category,
      content: this.editorContent
    };

    this.postService.createPost(postData).subscribe(
      (data) => {
        console.log('Post saved to DB:', data);

      },
      (err) => {
        console.error('Error saving post:', err);
      }
    );
  }

  onReady(editor: any) {
    console.log('Editor is ready!');
  }

  resetForm() {
    this.userName = '';
    this.title = '';
    this.email = '';
    this.category = '';
    this.editorContent = '';
  }
}
