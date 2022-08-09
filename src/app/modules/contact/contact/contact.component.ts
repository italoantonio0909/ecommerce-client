import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  isLoading: boolean = true;
  validate: boolean = false;

  contactForm = this.formBuilder.group({
    email: new FormControl("", [Validators.required, Validators.email]),
    proposse: new FormControl("", [Validators.required]),
  }, {
    updateOn: "submit"
  });


  submit() {
    this.validate = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

  }

  get email() {
    return this.contactForm.get("email")
  }

  get proposse() {
    return this.contactForm.get("proposse")
  }

}
