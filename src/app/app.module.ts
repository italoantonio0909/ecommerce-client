import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HttpClientModule } from '@angular/common/http';
import { SubscribersModule } from './modules/subscribers/subscribers.module';
import { SubscriberState } from './modules/subscribers/store/state';
import { CatalogueModule } from './modules/catalogue/catalogue.module';
import { CatalogueState } from './modules/catalogue/store/state';

const CONTAINERS = [
  DefaultLayoutSweetComponent,
  DefaultLayoutDarkComponent,
  DefaultLayoutLigthComponent,
];

const states = [
  SharedState,
  CatalogueState,
  SubscriberState
]

@NgModule({
  declarations: [AppComponent, ...CONTAINERS],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CatalogueModule,
    SharedModule,
    BlogModule,
    ContactModule,
    AboutModule,
    CatalogueModule,
    ShoppingCartModule,
    ShopModule,
    SubscribersModule,
    NotificationModule,
    SlickCarouselModule,
    NgxsModule.forRoot([...states], {
      developmentMode: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
