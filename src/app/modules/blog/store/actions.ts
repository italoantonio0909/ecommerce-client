export class PostFetchData {
    static readonly type = 'Post fetch data';
    constructor() { }
}

export class PostRetrieveDetail {
    static readonly type = 'Post retrieve detail';
    constructor(public postUid: string) { }
}