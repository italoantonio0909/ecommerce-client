import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUrl } from 'src/app/helpers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Post, PostPaginate } from '../entities/Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  postPaginate(limit: number, startAfter: number): Observable<PostPaginate> {
    return this.http.get<PostPaginate>(`${getUrl()}/api/posts/${limit}/${startAfter}`).
      pipe(
        map(e => e)
      );
  }
  postRetrieveDetail(postUid: string): Observable<Post> {
    return this.http.get<Post>(`${getUrl()}/api/posts/retrieve-detail/${postUid}`).
      pipe(
        map(e => e)
      );
  }
}
