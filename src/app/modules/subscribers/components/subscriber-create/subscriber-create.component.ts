import { Component } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { ToastMessage } from "../../../../helpers/index";
import { Subscriber } from '../../entities/Subscriber';
import { Store } from '@ngxs/store';
import { SubscriberCreate } from '../../store/actions';

@Component({
  selector: "app-subscriber-create",
  templateUrl: "./subscriber-create.component.html",
})
export class SubscriberCreateComponent {

  constructor(private store: Store) { }
  isLoading: boolean = true

  email = new FormControl("", Validators.required);

  async subscriberCreate() {
    this.isLoading = true

    const subscriber: Subscriber = {
      email: this.email.value,
    };

    try {
      await this.store.dispatch(new SubscriberCreate(subscriber)).toPromise()

      ToastMessage(
        "Serás alertado de cualquier novedad en la tienda",
        "success",
        "bottom-left",
        "white"
      );

    } catch (error) {
      ToastMessage(
        error.error.error,
        "error",
        "bottom-left",
        "white"
      );

    } finally {
      this.isLoading = false
    }
  }

}
