export class SubscriberRegistered {
    static readonly type = 'Subscribers [] Subscriber is registered';
    constructor(public isRegistered: boolean) { }
}