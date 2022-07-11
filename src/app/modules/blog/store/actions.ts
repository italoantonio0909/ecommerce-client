import { PostPaginate } from "../entities/Blog";

export class PostSetPaginate {
    static readonly type = 'Post [] Post set list';
    constructor(public posts: PostPaginate) { }
}