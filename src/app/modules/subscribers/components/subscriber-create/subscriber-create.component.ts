import { Component } from "@angular/core";
import { SubscriberService } from "../../services/subscriber.service";
import { FormControl } from "@angular/forms";
import { ToastMessage } from "../../../../helpers/index";
import { Subscriber } from '../../entities/Subscriber';

@Component({
  selector: "app-subscriber-create",
  templateUrl: "./subscriber-create.component.html",
})
export class SubscriberCreateComponent {

  constructor(private subscriberService: SubscriberService) { }
  isLoading: boolean = false

  email = new FormControl("");

  async subscriberCreate() {
    this.isLoading = true

    const subscriber: Subscriber = {
      email: this.email.value,
    };

    try {
      await this.subscriberService.subscriberCreate(subscriber).toPromise();

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
