import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketPanelComponent } from './basket-panel/basket-panel.component'
import { BasketRoutingModule } from './basket-routing.module';

const components = [BasketPanelComponent]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    BasketRoutingModule
  ],
  exports: [components]
})
export class BasketModule { }
