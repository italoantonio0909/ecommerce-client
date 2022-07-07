import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertMessage, ToastMessage } from '../../../../helpers/index';
import { Customer } from '../../entities/Customer';

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
  });


  async customerCreate() {

    this.isLoading = true;

    const email = this.customerCreateForm.get('email')?.value! as string;
    const password = this.customerCreateForm.get('password')?.value as string;
    const passwordConfirm = this.customerCreateForm.get('passwordConfirm')?.value;

    const customer: Customer = {
      disabled: false,
      email: email,
      password: password

    };

    try {
      await this.customerService.customerCreate(customer).toPromise();
      ToastMessage("Cuenta creada", "success", "bottom-right", "dark");

    } catch (error) {
      console.log(error)
      ToastMessage(error.error.error, "error", "bottom-right", "dark");

    } finally {
      this.isLoading = false;
    }
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

}
