import { Component, OnInit } from "@angular/core";
import { SubscriberService, Subscriber } from "../../services/subscriber.service";
import { FormControl } from "@angular/forms";
import { ToastMessage } from "../../../../helpers/index";

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
