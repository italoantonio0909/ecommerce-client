import { Component, OnInit } from '@angular/core';
import { ToastMessage } from '../../helpers';
import { Store, Select } from '@ngxs/store';
import { ProductDetail } from '../../store/products/actions';
import { ProductStateModel, ProductState } from '../../store/products/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  @Select(ProductState.getProductDetail) productDetail!: Observable<any>;

  showAlert() {
    ToastMessage('Producto agregado a favoritos', 'success');
  }

  productDetailSetup() {
    this.store.dispatch(new ProductDetail(true));
  }
}
