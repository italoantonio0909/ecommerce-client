import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUrl } from 'src/app/helpers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Post } from '../entities/Blog';
import { Paginate } from '../../shared/interfaces/Paginate';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  postPaginateList(limitOfDocuments: number, page: number): Observable<Paginate<Post>> {
    return this.http.get<Paginate<Post>>(`${getUrl()}/api/blog/posts/paginate/${limitOfDocuments}/${page}`).
      pipe(
        map(e => e)
      );
  }
  postRetrieveDetail(postUid: string): Observable<Post> {
    return this.http.get<Post>(`${getUrl()}/api/blog/retrieve-post/${postUid}`).
      pipe(
        map(e => e)
      );
  }
}
