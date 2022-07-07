import { Component, Input, OnInit } from '@angular/core';
import 'animate.css';

interface Props {
  img: string;
  title: string;
  tag: string;
  description: string;
}

@Component({
  selector: 'app-slider-preview',
  templateUrl: './slider-preview.component.html',
  styleUrls: ['./slider-preview.component.css'],
})
export class SliderPreviewComponent implements OnInit {
  @Input() slider?: Props;

  constructor() {}

  ngOnInit(): void {}
}
