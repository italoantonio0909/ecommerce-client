import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../entities/Blog';
import { BlogService } from '../../services/blog.service';
import { Action, Select, Store } from '@ngxs/store';
import { BlogState } from '../../store/state';
import { PostSetPaginate } from '../../store/actions';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {

  constructor(public blogService: BlogService, private store: Store) { }

  @Select(BlogState.getPost) posts$!: Observable<Array<Post>>;

  async postPaginate() {
    try {
      const posts = await this.blogService.postPaginate(3, 0).toPromise()
      this.store.dispatch(new PostSetPaginate(posts))
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    this.postPaginate()
  }
}
