import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from '../Post';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }
  post_url = 'https://pback-1-6ajp.onrender.com'      //https://pback-lxcl.onrender.com  https://silver-beetle-yoke.cyclic.app
  getPosts(): Observable<Post[]> {

    const url = `${this.post_url}/api/posts`;
    return this.http.get<Post[]>(url);
  }
  getPostByName(title: string): Observable<Post[]> {
    const encodedTopicName = encodeURIComponent(title)
    console.log(encodedTopicName)
    const url = `${this.post_url}/api/posts/${encodedTopicName}`;
    return this.http.get<Post[]>(url, { headers: { 'Content-Type': 'application/json' } });
  }
  createPost(data: any) {
    const url = `${this.post_url}/api/posts`;
    return this.http.post(url, data, { headers: { 'Content-Type': 'application/json' } });
  }
  createComment(data: any) {
    const url = `${this.post_url}/api/post/comment`;
    return this.http.post(url, data, { headers: { 'Content-Type': 'application/json' } });
  }
}
