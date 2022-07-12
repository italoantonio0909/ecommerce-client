import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductDetail } from '../../store/actions';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  colorSelected: Select2OptionData = {} as Select2OptionData;

  sizeSelected: Select2OptionData = {} as Select2OptionData;

  constructor(private store: Store) { }

  ngOnInit(): void { }

  closeModal() {
    this.store.dispatch(new ProductDetail(false));
  }
  colors: Array<Select2OptionData> = [
    { id: 'red', text: 'Rojo' },
    { id: 'blue', text: 'Azul' },
    { id: 'white', text: 'Blanco' },
    { id: 'grey', text: 'Gris' },
  ];
  sizes: Array<Select2OptionData> = [
    { id: 's', text: 'S' },
    { id: 'm', text: 'M' },
    { id: 'L', text: 'L' },
    { id: 'XL', text: 'XL' },
  ];
}
