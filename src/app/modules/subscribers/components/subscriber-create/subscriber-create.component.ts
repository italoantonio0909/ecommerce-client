import { Component } from "@angular/core";
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastMessage } from "../../../../helpers/index";
import { Subscriber } from '../../entities/Subscriber';
import { Store } from '@ngxs/store';
import { SubscriberCreate } from '../../store/actions';

@Component({
  selector: "app-subscriber-create",
  templateUrl: "./subscriber-create.component.html",
})
export class SubscriberCreateComponent {

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  isLoading: boolean = false

  subscriberCreateForm = this.formBuilder.group({
    email: new FormControl("", Validators.required)
  })

  async subscriberCreate() {
    this.isLoading = true

    const subscriber: Subscriber = {
      email: this.subscriberCreateForm.get("email").value
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
      console.log(error)
      ToastMessage(
        error.error.message,
        "error",
        "bottom-left",
        "white"
      );

    } finally {
      this.isLoading = false
    }
  }

  get email() {
    return this.subscriberCreateForm.get("email")
  }
}
