import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.css'],
})
export class BackTopComponent implements OnInit {
  constructor() {}

  navigateTop = function () {
    window.scrollTo(0, 0);
  };

  ngOnInit() {
    const button = document.getElementById('back-top');

    const windowH = window.innerHeight / 2;

    window.addEventListener('scroll', function () {
      if (window.scrollY > windowH) {
        button!.style.display = 'flex';
      } else {
        button!.style.display = 'none';
      }
    });
  }
}
