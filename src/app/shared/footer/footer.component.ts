import { Component, OnInit } from '@angular/core';
import {
  SubscriberService,
  Subscriber,
} from '../../services/subscriber.service';
import { ToastMessage } from '../../helpers/index';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  isLoading: boolean = false;

  email = new FormControl('');

  constructor(private subscriberService: SubscriberService) {}

  ngOnInit(): void {}

  async createSubscriber() {
    this.isLoading = true;

    const subscriber: Subscriber = {
      email: this.email.value,
      status: 'active',
    };

    const response = await this.subscriberService
      .createSubscriber(subscriber)
      .toPromise();

    if (response) {
      ToastMessage(
        'Serás alertado de cualquier novedad en la tienda',
        'success',
        'bottom-left',
        'white'
      );
      this.isLoading = false;
    }
  }
}
