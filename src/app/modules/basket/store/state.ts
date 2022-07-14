import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BasketPanelShow } from './action';

export interface BasketModelState {
    open: boolean;
}

@State<BasketModelState>({
    name: 'basket',
    defaults: {
        open: false
    }
})
@Injectable()
export class BasketState {
    constructor() { }

    @Selector()
    static basketPanelShowGet(state: BasketModelState) {
        return state.open;
    }

    @Action(BasketPanelShow)
    basketPanelShow(
        ctx: StateContext<BasketModelState>,
        { open }: BasketPanelShow
    ) {
        const state = ctx.getState();
        return ctx.setState({ ...state, open })
    }
}