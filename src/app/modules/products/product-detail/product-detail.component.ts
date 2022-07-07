import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Select2OptionData } from 'ng-select2';
import { ProductDetail } from '../../../store/products/actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
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
