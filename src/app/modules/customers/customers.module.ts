import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const components = [CustomerCreateComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CustomersRoutingModule
  ],
  exports: [components]
})
export class CustomersModule { }
