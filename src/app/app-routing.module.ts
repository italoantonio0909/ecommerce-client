import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutSweetComponent } from './modules/shared/default-layout/default-layout-sweet/default-layout-sweet.component';
import { HomeSweetComponent } from './modules/shared/home/home-sweet/home-sweet.component';
// import { AuthGuard } from './guards/auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { redirectLoggedIn, redirectUnauthorizedToLogin } from './guards/firebase.pipes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutSweetComponent,
    children: [
      {
        path: 'home',
        component: HomeSweetComponent
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./modules/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('./modules/shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'shopping-cart',
        loadChildren: () =>
          import('./modules/shopping-cart/shopping-cart.module').then(
            (m) => m.ShoppingCartModule
          ),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedIn }
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./modules/customers/customers.module').then(
        (m) => m.CustomersModule
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
export class AppRoutingModule { }
