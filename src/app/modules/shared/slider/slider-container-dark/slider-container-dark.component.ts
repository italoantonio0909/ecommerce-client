import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

interface Props {
  img: string;
  title: string;
  tag: string;
  description: string;
}

@Component({
  selector: 'slider-container-dark',
  templateUrl: './slider-container-dark.component.html',
})
export class SliderContainerDarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides: Array<Props> = [
    {
      img: '../../../static/images/slide-05.jpg',
      title: 'Mujer Collection 2022',
      tag: 'NEW SEASON',
      description: 'Comprar',
    },
    {
      img: '../../../static/images/slide-06.jpg',
      title: 'Hombre Collection 2022',
      tag: 'NEW SEASON',
      description: 'Comprar',
    },
    {
      img: '../../../static/images/slide-07.jpg',
      title: 'Accesorios Collection 2022',
      tag: 'NEW SEASON',
      description: 'Comprar',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow:
      '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
    nextArrow:
      '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
  };

  sliders$ = of([1, 2, 3]);

}
