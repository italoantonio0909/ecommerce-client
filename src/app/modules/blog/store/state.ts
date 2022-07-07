import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Post } from "../interfaces/blog-interfaces";
import { PostSetList } from './actions';

export interface BlogModelState {
    posts: Array<Post>
}

@State<BlogModelState>({
    name: 'blog',
    defaults: {
        posts: []
    }
})
@Injectable()
export class BlogState {
    @Selector()
    static getPost(state: BlogModelState) {
        return state.posts
    }
    @Action(PostSetList)
    setPost(
        { getState, setState }: StateContext<BlogModelState>,
        { posts }: PostSetList
    ) {
        const state = getState();
        setState({ ...state, posts })
    }
}