import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductDetail } from '../../../store/products/actions';
import { ToastMessage } from '../../../helpers/index';
import { ProductState } from '../../../store/products/state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void { }

  @Select(ProductState.getProductDetail) productDetail!: Observable<any>;

  showAlert() {
    ToastMessage('Producto agregado a favoritos', 'success');
  }

  productDetailSetup() {
    this.store.dispatch(new ProductDetail(true));
  }
}
