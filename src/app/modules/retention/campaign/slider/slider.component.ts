import { Component, OnInit, Input } from '@angular/core';
import 'animate.css';

interface Props {
  img: string;
  title: string;
  tag: string;
  description: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
  @Input() slider?: Props;

  constructor() { }

  ngOnInit(): void {
  }

}
