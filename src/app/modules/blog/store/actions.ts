export class PostPaginateList {
    static readonly type = 'Post paginate list';
    constructor(public limitOfDocuments: number, public page: number) { }
}

export class PostRetrieveDetail {
    static readonly type = 'Post retrieve detail';
    constructor(public postUid: string) { }
}