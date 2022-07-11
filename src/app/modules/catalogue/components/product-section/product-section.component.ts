import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
})
export class ProductSectionComponent implements OnInit {
  products$ = of([1, 2, 3, 4, 5]);

  searchProduct: boolean = false;

  filterProduct: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
