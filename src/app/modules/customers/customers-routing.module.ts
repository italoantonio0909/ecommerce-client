import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerResetPassword } from './components/customer-reset-pasword/customer-reset-password.component';

const routes: Routes = [
  {
    path: 'create',
    component: CustomerCreateComponent,
  },
  {
    path: 'reset-password',
    component: CustomerResetPassword,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
