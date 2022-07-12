import { Component, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ProductDetail } from '../../store/actions';
import { Product } from '../../entities/Product';
import { CatalogueState } from '../../store/state';
import { ToastMessage } from '../../../../helpers/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
})
export class ProductPreviewComponent {
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
