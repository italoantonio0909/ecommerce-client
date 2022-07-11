import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Post, PostPaginate } from "../entities/Blog";
import { PostSetPaginate } from './actions';

export interface BlogModelState {
    posts: PostPaginate,
}

@State<BlogModelState>({
    name: 'blog',
    defaults: {
        posts: {} as PostPaginate
    }
})
@Injectable()
export class BlogState {
    @Selector()
    static getPost(state: BlogModelState) {
        return state.posts
    }
    @Action(PostSetPaginate)
    setPost(
        { getState, setState }: StateContext<BlogModelState>,
        { posts }: PostSetPaginate
    ) {
        const state = getState();
        setState({ ...state, posts })
    }
}