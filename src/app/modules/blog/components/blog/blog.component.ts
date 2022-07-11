import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../entities/Blog';
import { BlogService } from '../../services/blog.service';
import { Select, Store } from '@ngxs/store';
import { BlogState } from '../../store/state';
import { PostFetchData } from '../../store/actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {

  constructor(public blogService: BlogService, public store: Store) { }

  @Select(BlogState.postGet) posts$!: Observable<Array<Post>>;

  @Select(BlogState.postPaginateCount) paginateCount$!: Observable<number>;

  counter(element: number) {
    return new Array(element);
  }

  ngOnInit() { this.store.dispatch(new PostFetchData()) }

}
