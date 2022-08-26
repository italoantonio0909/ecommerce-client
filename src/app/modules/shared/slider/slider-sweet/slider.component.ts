import { Component, OnInit, Input } from '@angular/core';
import 'animate.css';

interface Props {
  img: string;
  title: string;
  tag: string;
  description: string;
}

@Component({
  selector: 'slider-sweet',
  templateUrl: './slider.component.html',
})
export class SliderSweetComponent implements OnInit {
  @Input() slider?: Props;

  constructor() { }

  ngOnInit(): void {
  }

}
