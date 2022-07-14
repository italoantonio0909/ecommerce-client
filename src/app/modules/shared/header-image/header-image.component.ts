import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
})
export class HeaderImageComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void { }
}
