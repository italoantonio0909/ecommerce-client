import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SharedState } from '../../../store/shared/shared.state';
import { BasketState } from '../store/state';
import { BasketPanelShow } from '../store/action';

@Component({
  selector: 'app-basket-panel',
  templateUrl: './basket-panel.component.html',
})
export class BasketPanelComponent implements OnInit {
  constructor(public store: Store) { }

  @Select(BasketState.basketPanelShowGet)
  basketPanel$!: Observable<boolean>;

  soppingCartPanelHide() {
    this.store.dispatch(new BasketPanelShow(false));
  }

  ngOnInit(): void { }
}
