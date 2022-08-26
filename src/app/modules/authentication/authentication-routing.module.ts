import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/signIn/signIn.component';
import { ResetPassword } from './components/recovery-password/recovery-password.component';

const routes: Routes = [
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'recovery-password',
    component: ResetPassword
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
