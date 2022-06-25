import { Component, OnInit } from '@angular/core';
import {
  NotificationSetup,
  SearchSetup,
} from '../../../store/shared/shared.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-header-dark',
  templateUrl: './header-dark.component.html',
  styleUrls: ['./header-dark.component.css'],
})
export class HeaderDarkComponent implements OnInit {
  constructor(public store: Store) {}

  notificationPanel() {
    this.store.dispatch(new NotificationSetup(true));
  }

  searchPanel() {
    this.store.dispatch(new SearchSetup(true));
  }

  shoppingCartPanel() {
    document.querySelector('.js-panel-cart')?.classList.add('show-header-cart');
  }

  ngOnInit(): void {
    const topBar = document.querySelectorAll('.top-bar');

    const headerDesktop = document.querySelector('.container-menu-desktop');

    const wrapMenu: HTMLElement | null =
      document.querySelector('.wrap-menu-desktop');

    // TopBar querySelectorAll return array elements
    // TopBar has elements
    let posWrapHeader: number = 0;
    if (topBar.length > 0) {
      // ClientHeight obtain height element
      posWrapHeader = topBar[0].clientHeight;
    } else {
      posWrapHeader = 0;
    }

    // ScrollY obtain scroll current window
    if (window.scrollY > posWrapHeader) {
      headerDesktop!.classList.add('fix-menu-desktop');
      wrapMenu!.style.top = '0px';
    } else {
      headerDesktop!.classList.remove('fix-menu-desktop');
      var wrapHeader = posWrapHeader - window.scrollY;
      wrapMenu!.style.top = `${wrapHeader}px`;
    }

    function scrollWindow() {
      // ScrollY obtain scroll current window
      if (window.scrollY > posWrapHeader) {
        headerDesktop!.classList.add('fix-menu-desktop');
        wrapMenu!.style.top = '0px';
      } else {
        headerDesktop!.classList.remove('fix-menu-desktop');
        var wrapHeader = posWrapHeader - window.scrollY;
        wrapMenu!.style.top = `${wrapHeader}px`;
      }
    }

    window.addEventListener('scroll', scrollWindow);
  }
}
