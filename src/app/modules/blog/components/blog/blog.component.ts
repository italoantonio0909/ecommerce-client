import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../entities/Blog';
import { Select, Store } from '@ngxs/store';
import { BlogState } from '../../store/state';
import { PostPaginateList } from '../../store/actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {

  limitOfDocuments: number = 3;

  page: number = 1;

  constructor(public store: Store) { }

  @Select(BlogState.postPaginateList) posts$!: Observable<Array<Post>>;

  @Select(BlogState.postPaginateListCount) paginateCount$!: Observable<number>;

  counter(total: number) {
    const elements = Math.ceil(total / this.limitOfDocuments);

    return new Array(elements);
  }

  postPaginateListCount(page: number) {
    this.page = page;

    this.store.dispatch(new PostPaginateList(this.limitOfDocuments, page));
  }

  ngOnInit() { this.store.dispatch(new PostPaginateList(this.limitOfDocuments, this.page)) }

}
