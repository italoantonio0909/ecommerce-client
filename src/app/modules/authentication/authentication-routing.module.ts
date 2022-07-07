import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/signIn/signIn.component';
import { SignUpComponent } from './components/signUp/signUp.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';

const routes: Routes = [
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'recovery-password',
    component: RecoveryPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
