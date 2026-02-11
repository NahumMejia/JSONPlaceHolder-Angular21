import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../Environment/environment';
import { Post } from '../Interfaces/post.interface';
import { PostComment } from '../../Comments/Interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = environment.BASE_URL;

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  }

  getCommentsByPost(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.URL}/posts/${postId}/comments`);
  }
}