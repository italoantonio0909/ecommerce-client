import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnInit {
  products$ = of([1, 2, 3, 4, 5, 7, 8, 9, 10]);
  constructor() { }

  ngOnInit(): void { }
}
