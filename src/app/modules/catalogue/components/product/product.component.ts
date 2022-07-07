import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ToastMessage } from '../../../../helpers/index';
import { ProductDetail } from '../../store/actions';
import { CatalogueState } from '../../store/state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void { }

  @Select(CatalogueState.getProductDetail) productDetail!: Observable<any>;

  showAlert() {
    ToastMessage('Producto agregado a favoritos', 'success');
  }

  productDetailSetup() {
    this.store.dispatch(new ProductDetail(true));
  }
}
