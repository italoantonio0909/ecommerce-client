import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SharedState } from '../../../store/shared/shared.state';
import { Observable } from 'rxjs';
import { ProductState } from '../../../store/products/state';

@Component({
  selector: 'app-default-layout-sweet',
  templateUrl: './default-layout-sweet.component.html',
  styleUrls: ['./default-layout-sweet.component.css'],
})
export class DefaultLayoutSweetComponent implements OnInit {
  constructor() {}

  @Select(SharedState.getNotificationSetup)
  notificationSetup$!: Observable<any>;

  @Select(SharedState.getShoppingCartSetup)
  shoppingCartSetup$!: Observable<any>;

  @Select(SharedState.getSearchSetup)
  searchSetup$!: Observable<any>;

  @Select(ProductState.getProductDetail)
  productDetail$!: Observable<any>;

  ngOnInit(): void {}
}
