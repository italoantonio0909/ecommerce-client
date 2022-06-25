import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ProductsModule } from '../products/products.module';

const components = [ShopComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ShopRoutingModule, ProductsModule],
  exports: [components],
})
export class ShopModule {}
