import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationSignIn } from '../../store/actions';
import { of, Subject } from 'rxjs';
import { ToastMessage } from '../../../../helpers/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
})
export class SignInComponent {

  private destroy$ = new Subject<void>();

  hiddenPassword: boolean = true;

  constructor(private store: Store, private formBuilder: FormBuilder, private router: Router) { }

  authenticationSignInForm = this.formBuilder.group({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  }, { updateOn: "submit" })

  isLoading: boolean = false;

  submit() {
    if (this.authenticationSignInForm.invalid) {
      return;
    }
    this.isLoading = true;

    const email = this.authenticationSignInForm.get("email").value;
    const password = this.authenticationSignInForm.get("password").value;

    this.store.dispatch(new AuthenticationSignIn(email, password))
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigate(["/"])
      },
        (error) => {
          this.isLoading = false;
          console.log({ error })
          ToastMessage("Credenciales incorrectas.", "error", "bottom-right", "white", 8000);
          return of('')
        });
  }

  get email() {
    return this.authenticationSignInForm.get("email");
  }

  get password() {
    return this.authenticationSignInForm.get("password");
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
