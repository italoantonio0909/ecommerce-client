import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ShoppingCartPanelComponent } from './components/shopping-cart-panel/shopping-cart-panel.component';
import { ProductComponent } from './components/product/product.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgSelect2Module } from 'ng-select2';

const components = [
  ShoppingCartPanelComponent,
  ProductComponent,
  ProductSectionComponent,
  ProductDetailComponent,
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    NgSelect2Module
  ],
  exports: [components]
})
export class CatalogueModule { }
