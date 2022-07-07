import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';

const components = [ContactComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ContactRoutingModule],
  exports: [components],
})
export class ContactModule {}
