import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { NotificationSetup, SearchSetup, ShoppingCartSetup } from '../../../../store/shared/shared.actions';

@Component({
  selector: 'app-header-sweet',
  templateUrl: './header-sweet.component.html',
  styleUrls: ['./header-sweet.component.css'],
})
export class HeaderSweetComponent implements OnInit {
  constructor(private store: Store) { }

  notificationPanel() {
    this.store.dispatch(new NotificationSetup(true));
  }

  searchPanel() {
    this.store.dispatch(new SearchSetup(true));
  }

  shoppingCartPanel() {
    this.store.dispatch(new ShoppingCartSetup(true));
  }

  ngOnInit(): void {
    const topBar: NodeListOf<Element> = document.querySelectorAll('.top-bar');

    const headerDesktop: HTMLElement | null = document.querySelector(
      '.container-menu-desktop'
    );

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
