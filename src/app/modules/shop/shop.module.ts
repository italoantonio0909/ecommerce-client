import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { CatalogueModule } from '../catalogue/catalogue.module';

const components = [ShopComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ShopRoutingModule, CatalogueModule],
  exports: [components],
})
export class ShopModule { }
