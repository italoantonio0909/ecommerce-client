export class ProductDetail {
    static readonly type = 'Products [] Product Detail';
    constructor(public open: boolean) { }
}

export class ProductPaginateFetch {
    static readonly type = 'Products [] Product paginate fetch';
    constructor(public limit: number, public startAfter: number) { }
}