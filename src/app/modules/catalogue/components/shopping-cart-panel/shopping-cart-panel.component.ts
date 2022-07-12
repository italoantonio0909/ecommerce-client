import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SharedState } from '../../../../store/shared/shared.state';
import { ShoppingCartSetup } from '../../../../store/shared/shared.actions';

@Component({
  selector: 'app-shopping-cart-panel',
  templateUrl: './shopping-cart-panel.component.html',
})
export class ShoppingCartPanelComponent implements OnInit {
  constructor(public store: Store) { }

  @Select(SharedState.getShoppingCartSetup)
  shoppingCartSetup$!: Observable<any>;

  soppingCartPanelHide() {
    this.store.dispatch(new ShoppingCartSetup(false));
  }

  ngOnInit(): void { }
}
