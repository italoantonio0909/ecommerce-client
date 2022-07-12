import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-home-sweet',
  templateUrl: './home-sweet.component.html',
})
export class HomeSweetComponent implements OnInit {
  searchProduct: boolean = false;

  banners$ = of([1, 2, 3]);


  constructor() { }

  ngOnInit(): void { }
}
