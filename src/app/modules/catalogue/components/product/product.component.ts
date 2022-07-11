import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ToastMessage } from '../../../../helpers/index';
import { ProductDetail } from '../../store/actions';
import { CatalogueState } from '../../store/state';
import { Product } from '../../entities/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  constructor(private store: Store) { }

  @Input() data: Product = {} as Product;

  @Select(CatalogueState.getProductDetail) productDetail!: Observable<any>;

  showAlert() {
    ToastMessage('Producto agregado a favoritos', 'success');
  }

  productDetailSetup() {
    this.store.dispatch(new ProductDetail(true));
  }
}
