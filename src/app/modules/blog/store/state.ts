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
        count: 0,
    }
})
@Injectable()
export class BlogState {

    constructor(private blogService: BlogService) { }

    @Selector()
    static postGet(state: BlogModelState) {
        return state.posts
    }

    @Selector()
    static postPaginateCount(state: BlogModelState) {
        return state.count / 3
    }

    @Selector()
    static postById(state: BlogModelState, postUid: string) {
        return state.posts.find(({ id }) => id === postUid)
    }

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

        const posts = state.posts;

        if (posts) {
            return false;
        }

        return this.blogService.postRetrieveDetail(postUid).pipe(
            map(e => ctx.patchState({ ...state, [postUid]: e }))
        )
    }

}