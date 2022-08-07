import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NotificationSetup } from '../../../store/shared/shared.actions';
import { SharedState } from '../../../store/shared/shared.state';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
})
export class NotificationPanelComponent implements OnInit {
  constructor(private store: Store) { }

  @Select(SharedState.getNotificationSetup)
  notificationSetup$!: Observable<any>;

  notificationPanelHide() {
    this.store.dispatch(new NotificationSetup(false));
  }

  ngOnInit(): void {
  }
}
