import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from '../Post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }
  post_url = 'https://pback-lxcl.onrender.com'
  getPosts(): Observable<Post[]> {

    const url = `${this.post_url}/api/posts`;
    return this.http.get<Post[]>(url);
  }
  getPostByName(title: string): Observable<Post[]> {
    const encodedTopicName = encodeURIComponent(title)
    const url = `${this.post_url}/api/posts/${encodedTopicName}`;
    console.log(encodeURIComponent(title));
    return this.http.get<Post[]>(url);
  }
  createPost(data: any) {
    const url = `${this.post_url}/api/posts`;
    return this.http.post(url, data, { headers: { 'Content-Type': 'application/json' } });
  }
}
