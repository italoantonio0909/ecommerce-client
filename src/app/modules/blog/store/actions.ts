import { Post } from "../interfaces/blog-interfaces";

export class PostSetList {
    static readonly type = 'Post [] Post set list';
    constructor(public posts: Array<Post>) { }
}