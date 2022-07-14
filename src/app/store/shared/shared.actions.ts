export class NotificationSetup {
  static readonly type = '[Shared] Notification Setup';
  constructor(public open: boolean) { }
}

export class SearchSetup {
  static readonly type = '[Shared] Search Setup';
  constructor(public open: boolean) { }
}

