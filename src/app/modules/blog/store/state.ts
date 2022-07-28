import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext, createSelector } from '@ngxs/store';
import { Post } from '../entities/Blog';
import { PostPaginateList, PostRetrieveDetail } from './actions';
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

    constructor(private blogService: BlogService) { }

    @Selector()
    static postPaginateList(state: BlogModelState) {
        return state.posts
    }

    @Selector()
    static postPaginateListCount(state: BlogModelState) {
        return state.count
    }

    static postById(postUid: string) {
        return createSelector([BlogState], (state: BlogModelState) => state.posts.find(({ id }) => id === postUid));
    }

    @Action(PostPaginateList)
    postPaginateList(
        { getState, setState }: StateContext<BlogModelState>,
        { limitOfDocuments, page }: PostPaginateList
    ) {

        const state = getState();

        return this.blogService.postPaginateList(limitOfDocuments, page).pipe(
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