import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { BlogModule } from './modules/blog/blog.module';
import { NotificationModule } from './modules/notification/notification.module';
import { ShopModule } from './modules/shop/shop.module';
import { SharedState } from './store/shared/shared.state';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { ContactModule } from './modules/contact/contact.module';
import { AboutModule } from './modules/about/about.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DefaultLayoutSweetComponent } from './modules/shared/default-layout/default-layout-sweet/default-layout-sweet.component';
import { DefaultLayoutDarkComponent } from './modules/shared/default-layout/default-layout-dark/default-layout-dark.component';
import { DefaultLayoutLigthComponent } from './modules/shared/default-layout/default-layout-ligth/default-layout-ligth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubscribersModule } from './modules/subscribers/subscribers.module';
import { SubscriberState } from './modules/subscribers/store/state';
import { CatalogueModule } from './modules/catalogue/catalogue.module';
import { CatalogueState } from './modules/catalogue/store/state';
import { BlogState } from './modules/blog/store/state';
import { CustomersModule } from './modules/customers/customers.module';
import { CampaignModule } from './modules/retention/campaign/campaign.module';
import { BasketModule } from './modules/basket/basket.module';
import { BasketState } from './modules/basket/store/state';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthenticationState } from './modules/authentication/store/state';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';

// @Injectable()
// export class APIInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const apiReq = req.clone({ url: `http://localhost:3000/${req.url}` });
//     return next.handle(apiReq);
//   }
// }

const CONTAINERS = [
  DefaultLayoutSweetComponent,
  DefaultLayoutDarkComponent,
  DefaultLayoutLigthComponent,
];

const states = [
  SharedState,
  CatalogueState,
  SubscriberState,
  BlogState,
  AuthenticationState,
  BasketState
]

@NgModule({
  declarations: [AppComponent, ...CONTAINERS],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireAuthGuardModule,
    CatalogueModule,
    SharedModule,
    BlogModule,
    ContactModule,
    CampaignModule,
    BasketModule,
    AboutModule,
    CustomersModule,
    CatalogueModule,
    ShoppingCartModule,
    ShopModule,
    SubscribersModule,
    NotificationModule,
    SlickCarouselModule,
    NgxsModule.forRoot([...states], {
      developmentMode: true,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    // { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
