import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SharedState } from '../../../../store/shared/shared.state';
import { CatalogueState } from '../../../catalogue/store/state';
import { BasketPanelShow } from '../../../basket/store/action';
import { BasketState } from '../../../basket/store/state';

@Component({
  selector: 'app-default-layout-sweet',
  templateUrl: './default-layout-sweet.component.html',
})
export class DefaultLayoutSweetComponent implements OnInit {
  constructor() { }

  @Select(SharedState.getNotificationSetup)
  notificationSetup$!: Observable<any>;

  @Select(BasketState.basketPanelShowGet)
  basketPanel$!: Observable<any>;

  @Select(SharedState.getSearchSetup)
  searchSetup$!: Observable<any>;

  @Select(CatalogueState.getProductDetail)
  productDetail$!: Observable<any>;

  ngOnInit(): void { }
}
