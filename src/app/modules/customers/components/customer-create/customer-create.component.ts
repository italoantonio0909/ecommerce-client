import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastMessage } from '../../../../helpers/index';
import { Customer } from '../../entities/Customer';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
})
export class CustomerCreateComponent {

  constructor(
    private customerService: CustomersService,
    private formBuilder: FormBuilder
  ) { }

  isLoading: boolean = false;

  hiddenPassword: boolean = true;

  customerCreateForm = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
    displayName: new FormControl('', Validators.required),
  }, { updateOn: "change" });


  async customerCreate() {

    const email = this.customerCreateForm.get('email')?.value! as string;
    const password = this.customerCreateForm.get('password')?.value as string;
    const passwordConfirm = this.customerCreateForm.get('passwordConfirm')?.value;
    const displayName = this.customerCreateForm.get('displayName')?.value;

    const customer: Customer = {
      disabled: false,
      email: email,
      password: password,
      displayName: displayName
    };

    if (this.customerCreateForm.invalid) {
      return;
    }

    this.isLoading = true;

    this.customerService.customerCreate(customer)
      .pipe(
        catchError((error) => {
          console.log({ error })
          this.isLoading = false
          return of('')
        })
      ).subscribe(() => this.isLoading = false)
  }

  get email() {
    return this.customerCreateForm.get('email');
  }

  get password() {
    return this.customerCreateForm.get('password');
  }

  get passwordConfirm() {
    return this.customerCreateForm.get('passwordConfirm');
  }

  get displayName() {
    return this.customerCreateForm.get('displayName');

  }

}
