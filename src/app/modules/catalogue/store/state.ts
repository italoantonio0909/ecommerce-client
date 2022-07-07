import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { ProductDetail } from './actions';

export interface CatalogueStateModel {
    productdetail: boolean;
}

@State<CatalogueStateModel>({
    name: 'catalogue',
    defaults: {
        productdetail: false,
    },
})
@Injectable()
export class CatalogueState {
    @Selector()
    static getProductDetail(state: CatalogueStateModel) {
        return state.productdetail;
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
