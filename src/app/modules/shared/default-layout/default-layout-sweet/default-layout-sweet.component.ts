import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SharedState } from '../../../../store/shared/shared.state';
import { CatalogueState } from '../../../catalogue/store/state';

@Component({
  selector: 'app-default-layout-sweet',
  templateUrl: './default-layout-sweet.component.html',
  styleUrls: ['./default-layout-sweet.component.css'],
})
export class DefaultLayoutSweetComponent implements OnInit {
  constructor() { }

  @Select(SharedState.getNotificationSetup)
  notificationSetup$!: Observable<any>;

  @Select(SharedState.getShoppingCartSetup)
  shoppingCartSetup$!: Observable<any>;

  @Select(SharedState.getSearchSetup)
  searchSetup$!: Observable<any>;

  @Select(CatalogueState.getProductDetail)
  productDetail$!: Observable<any>;

  ngOnInit(): void { }
}
