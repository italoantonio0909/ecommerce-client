import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext, createSelector } from '@ngxs/store';
import { Post, PostPaginate } from '../entities/Blog';
import { PostFetchData, PostRetrieveDetail } from './actions';
import { BlogService } from '../services/blog.service';
import { tap, map } from 'rxjs/operators';

export interface BlogModelState {
    posts: Post[],
    count: number;
}

@State<BlogModelState>({
    name: 'blog',
    defaults: {
        posts: [],
        count: 0
    }
})
@Injectable()
export class BlogState {


    @Selector()
    static postGet(state: BlogModelState) {
        return state.posts
    }

    @Selector()
    static postPaginateCount(state: BlogModelState) {
        return state.count / 3
    }

    static postById(postUid: string) {
        return createSelector([BlogState], (state: BlogModelState) => state.posts.find(({ id }) => id === postUid));
    }

    constructor(private blogService: BlogService) { }

    @Action(PostFetchData)
    postFetchData(
        { getState, setState }: StateContext<BlogModelState>) {
        const state = getState();
        return this.blogService.postPaginate(3, 0).pipe(
            tap(({ results, count }) => setState({ ...state, posts: results, count: count })))
    }

    @Action(PostRetrieveDetail)
    postRetrieveDetail(ctx: StateContext<BlogModelState>, { postUid }: PostRetrieveDetail) {
        const state = ctx.getState();

        const postFinded = state.posts.find(({ id }) => id === postUid);

        if (postFinded) {
            return state;
        }

        return this.blogService.postRetrieveDetail(postUid).pipe(
            tap((e) => ctx.setState({ ...state, posts: [e] }))
        )
    }

}