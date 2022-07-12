import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ShoppingCartPanelComponent } from './components/shopping-cart-panel/shopping-cart-panel.component';
import { ProductComponent } from './components/product/product.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { NgSelect2Module } from 'ng-select2';
import { HttpClientModule } from '@angular/common/http';

const components = [
  ShoppingCartPanelComponent,
  ProductComponent,
  ProductSectionComponent,
  ProductPreviewComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    CatalogueRoutingModule,
    NgSelect2Module
  ],
  exports: [components]
})
export class CatalogueModule { }
