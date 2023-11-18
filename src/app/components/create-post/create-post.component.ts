import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  public Editor = ClassicEditor;
  public editorContent = '';
  private editorInstance: any; // Declare a private variable to hold the editor instance

  public onReady(editor: any) {
    this.editorInstance = editor; // Save the editor instance
    console.log('Editor is ready!');
  }

  public getEditorData() {
    if (this.editorInstance) {
      const data = this.editorInstance.getData();
      console.log('Editor Data:', data);
    } else {
      console.error('Editor instance not available.');
    }
  }

}
