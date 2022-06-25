import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Customer } from '../../entities/Customer';
import { ToastMessage } from 'src/app/helpers';
import { AlertMessage } from '../../../helpers/index';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  signUpForm = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirm: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    // ToastMessage('Registrado en la tienda', 'error', 'bottom-end', 'dark');
    AlertMessage('Registrado en la tienda', 'success');
  }

  signUp() {
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    const passwordConfirm = this.signUpForm.get('passwordConfirm')?.value;
    const customer: Customer = {
      email,
      password,
    };
    this.authService.signUp(customer);
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get passwordConfirm() {
    return this.signUpForm.get('passwordConfirm');
  }
}
