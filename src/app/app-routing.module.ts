import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSweetComponent } from './shared/home/home-sweet/home-sweet.component';
import { DefaultLayoutSweetComponent } from './shared/default-layout/default-layout-sweet/default-layout-sweet.component';
import { DefaultLayoutDarkComponent } from './shared/default-layout/default-layout-dark/default-layout-dark.component';
import { HomeDarkComponent } from './shared/home/home-dark/home-dark.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutSweetComponent,
    children: [
      {
        path: '',
        component: HomeSweetComponent,
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'shopping-cart',
        loadChildren: () =>
          import('./shopping-cart/shopping-cart.module').then(
            (m) => m.ShoppingCartModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
