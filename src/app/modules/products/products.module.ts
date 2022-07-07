import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ShoppingCartPanelComponent } from './shopping-cart-panel/shopping-cart-panel.component';
import { ProductComponent } from './product/product.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgSelect2Module } from 'ng-select2';

const components = [
  ShoppingCartPanelComponent,
  ProductComponent,
  ProductSectionComponent,
  ProductDetailComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ProductsRoutingModule, NgSelect2Module],
  exports: [components],
})
export class ProductsModule {}
