import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { ProductDetail, ProductPaginateFetch } from './actions';
import { CatalogueService } from '../services/catalogue.service';
import { tap } from 'rxjs/operators';
import { Product } from '../entities/Product';

export interface CatalogueStateModel {
    products: Array<Product>;
    productdetail: boolean;
}

@State<CatalogueStateModel>({
    name: 'catalogue',
    defaults: {
        products: [],
        productdetail: false,
    },
})
@Injectable()
export class CatalogueState {

    constructor(private catalogueService: CatalogueService) { }

    @Selector()
    static productPaginate(state: CatalogueStateModel) {
        return state.products;
    }

    @Selector()
    static getProductDetail(state: CatalogueStateModel) {
        return state.productdetail;
    }

    @Action(ProductPaginateFetch)
    productPaginateFetch(
        { getState, setState }: StateContext<CatalogueStateModel>,
        { limit, startAfter }: ProductPaginateFetch
    ) {
        const state = getState();
        return this.catalogueService.catalogueProductPaginate(limit, startAfter).pipe(
            tap((({ results }) => setState({ ...state, products: results }))))
    }


    @Action(ProductDetail)
    productDetail(
        { getState, setState }: StateContext<CatalogueStateModel>,
        { open }: ProductDetail
    ) {
        const state = getState();
        setState({
            ...state,
            productdetail: open,
        });
    }
}
