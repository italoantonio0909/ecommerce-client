import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SubscriberCreateComponent } from './components/subscriber-create/subscriber-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [SubscriberCreateComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // SharedModule,
    FormsModule,
    HttpClientModule,
    SubscribersRoutingModule
  ],
  exports: [components]
})
export class SubscribersModule { }
