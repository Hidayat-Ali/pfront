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
  post_url = 'https://public-api.wordpress.com/rest/v1.1/sites/hidayat734.wordpress.com'      // https://pback-1-6ajp.onrender.com
  getPosts(): Observable<Post[]> {

    const url = `${this.post_url}/posts`;

    return this.http.get<Post[]>(url)
  }
  getPostById(postId: any): Observable<any> {
    return this.http.get<any>(`${this.post_url}/posts/${postId}`);
  }
  // createPost(data: any) {
  //   const url = `${this.post_url}/api/posts`;
  //   return this.http.post(url, data, { headers: { 'Content-Type': 'application/json' } });
  // }
  // createComment(data: any) {
  //   const url = `${this.post_url}/api/post/comment`;
  //   return this.http.post(url, data, { headers: { 'Content-Type': 'application/json' } });
  // }
}
