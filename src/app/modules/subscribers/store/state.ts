import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SubscriberRegistered } from './actions';

export interface SubscriberModelState {
    isRegistered: boolean
}

@State<SubscriberModelState>({
    name: 'subscribers',
    defaults: {
        isRegistered: false
    }
})
@Injectable()
export class SubscriberState {
    @Selector()
    static getSubscriberRegistered(state: SubscriberModelState) {
        return state.isRegistered
    }
    @Action(SubscriberRegistered)
    subscriberRegistered(
        { getState, setState }: StateContext<SubscriberModelState>,
        { isRegistered }: SubscriberRegistered
    ) {
        const state = getState();
        setState({ ...state, isRegistered: isRegistered })
    }

}