import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { CatalogueState } from '../../store/state';
import { Product } from '../../entities/Product';
import { ProductPaginateFetch } from '../../store/actions';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
})
export class ProductSectionComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(CatalogueState.productPaginate) products$!: Observable<Array<Product>>;

  searchProduct: boolean = false;

  filterProduct: boolean = false;

  ngOnInit(): void {
    this.store.dispatch(new ProductPaginateFetch(3, 0))
  }
}
