import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../interfaces/blog-interfaces';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  posts: Array<Post> = [
    // {
    //   title: 'Cómo disfrutar este verano',
    //   category: [],
    //   description:
    //     'Este verano puedes utilizar prendas que se ajusten a tu medida',
    //   image: '',
    //   pubishDate: new Date(),
    //   publishBy: 'Administrador',
    // },
    // {
    //   title: 'Ofertas este verano por cuentas de $100 en adelante?',
    //   category: 'Hombre',
    //   description:
    //     'Este verano puedes utilizar prendas que se ajusten a tu medida',
    //   image: '',
    //   pubishDate: new Date(),
    //   publishBy: 'Administrador',
    // },
  ];

  posts$: Observable<Array<Post>> = of(this.posts);

  constructor() { }

  ngOnInit(): void { }
}
