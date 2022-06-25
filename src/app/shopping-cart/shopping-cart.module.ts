import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartTableComponent } from './shopping-cart-table/shopping-cart-table.component';
import { ShoppingCartCouponComponent } from './shopping-cart-coupon/shopping-cart-coupon.component';

const components = [
  ShoppingCartComponent,
  ShoppingCartTableComponent,
  ShoppingCartCouponComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ShoppingCartRoutingModule],
  exports: [components],
})
export class ShoppingCartModule {}
