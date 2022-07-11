import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { PostRetrieveDetail } from '../../store/actions';
import { BlogState } from '../../store/state';
import { Post } from '../../entities/Blog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {

  private destroy$ = new Subject<void>();

  constructor(route: ActivatedRoute, store: Store) {
    route.params.pipe(
      switchMap(params => store.dispatch(new PostRetrieveDetail(params.postUid))
        .pipe(mergeMap(() => store.select((state) => state.posts)))),
      takeUntil(this.destroy$)
    ).subscribe((e) => console.log(e))
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
