import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';

const components = [AboutComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, AboutRoutingModule],
  exports: [components],
})
export class AboutModule {}
