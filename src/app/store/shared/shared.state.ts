import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  NotificationSetup,
  SearchSetup,
  ShoppingCartSetup,
} from './shared.actions';

interface SharedStateModel {
  shoppingCartPanel: boolean;
  notificationPanel: boolean;
  searchModal: boolean;
}

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    notificationPanel: false,
    searchModal: false,
    shoppingCartPanel: false,
  },
})
@Injectable()
export class SharedState {
  @Selector()
  static getNotificationSetup(state: SharedStateModel) {
    return state.notificationPanel;
  }
  @Selector()
  static getSearchSetup(state: SharedStateModel) {
    return state.searchModal;
  }
  @Selector()
  static getShoppingCartSetup(state: SharedStateModel) {
    return state.shoppingCartPanel;
  }
  @Action(NotificationSetup)
  notificationSetup(
    { setState, getState }: StateContext<SharedStateModel>,
    { open }: NotificationSetup
  ) {
    const state = getState();
    setState({
      ...state,
      notificationPanel: open,
    });
  }
  @Action(SearchSetup)
  searchSetup(
    { setState, getState }: StateContext<SharedStateModel>,
    { open }: SearchSetup
  ) {
    const state = getState();
    setState({
      ...state,
      searchModal: open,
    });
  }
  @Action(ShoppingCartSetup)
  shoppingCartSetup(
    { setState, getState }: StateContext<SharedStateModel>,
    { open }: ShoppingCartSetup
  ) {
    const state = getState();
    setState({
      ...state,
      shoppingCartPanel: open,
    });
  }
}
