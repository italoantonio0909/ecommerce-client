import { Component, OnInit, Input } from '@angular/core';

interface Props {
  img: string;
  title: string;
  tag: string;
  description: string;
}

@Component({
  selector: 'slider-dark',
  templateUrl: './slider-dark.component.html',
})

export class SliderDarkComponent implements OnInit {
  @Input() slider?: Props;

  constructor() { }

  ngOnInit(): void {
  }


}
