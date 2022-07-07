import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './components/signIn/signIn.component';
import { SignUpComponent } from './components/signUp/signUp.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  SignInComponent,
  SignUpComponent,
  RecoveryPasswordComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AuthenticationRoutingModule,
  ],
  exports: [components],
})
export class AuthenticationModule {}
