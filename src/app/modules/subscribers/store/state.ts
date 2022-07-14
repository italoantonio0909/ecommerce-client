import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SubscriberCreate } from './actions';
import { SubscriberService } from '../services/subscriber.service';
import { map } from 'rxjs/operators';

export interface SubscriberModelState {
}

@State<SubscriberModelState>({
    name: 'subscribers',
    defaults: {
    }
})
@Injectable()
export class SubscriberState {

    constructor(private subscriberService: SubscriberService) { }

    @Action(SubscriberCreate)
    subscriberRegistered(
        ctx: StateContext<SubscriberModelState>,
        { subscriber }: SubscriberCreate
    ) {
        return this.subscriberService.subscriberCreate(subscriber).pipe(
            map(e => e)
        )
    }

}