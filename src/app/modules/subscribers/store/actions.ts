import { Subscriber } from '../entities/Subscriber';

export class SubscriberCreate {
    static readonly type = 'Subscribers [] Subscriber create';
    constructor(public subscriber: Subscriber) { }
}