export class PostFetchData {
    static readonly type = 'Post [] Post set list';
    constructor() { }
}

export class PostRetrieveDetail {
    static readonly type = 'Post [] Post retrieve detail';
    constructor(public postUid: string) { }
}