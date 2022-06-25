import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { ProductDetail } from './actions';

export interface ProductStateModel {
  productCurrent?: number;
  detail: boolean;
}

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    detail: false,
  },
})
@Injectable()
export class ProductState {
  @Selector()
  static getProductDetail(state: ProductStateModel) {
    return state.detail;
  }
  @Action(ProductDetail)
  productDetail(
    { getState, setState }: StateContext<ProductStateModel>,
    { open }: ProductDetail
  ) {
    const state = getState();
    setState({
      ...state,
      detail: open,
    });
  }
}
