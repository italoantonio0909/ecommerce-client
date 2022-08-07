import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationSignIn } from '../../store/actions';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
})
export class SignInComponent {

  constructor(private store: Store, private formBuilder: FormBuilder) { }

  authenticationSignInForm = this.formBuilder.group({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  isLoading: boolean = false;

  submit() {
    if (this.authenticationSignInForm.invalid) {
      return;
    }
    this.isLoading = true;

    const email = this.authenticationSignInForm.get("email").value;
    const password = this.authenticationSignInForm.get("password").value;

    this.store.dispatch(new AuthenticationSignIn(email, password))
      .pipe(catchError((e) => {
        this.isLoading = false;
        return of('')
      }))
      .subscribe(() => this.isLoading = false);
  }

  get email() {
    return this.authenticationSignInForm.get("email");
  }

  get password() {
    return this.authenticationSignInForm.get("password");
  }


}
