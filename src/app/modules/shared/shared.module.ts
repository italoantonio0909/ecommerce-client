import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { FooterComponent } from './footer/footer.component';
import { BackTopComponent } from './back-top/back-top.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { NotificationModule } from '../notification/notification.module';
import { ShopModule } from '../shop/shop.module';
import { BannerComponent } from '../retention/campaign/components/banner/banner.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { HomeSweetComponent } from './home/home-sweet/home-sweet.component';
import { HomeDarkComponent } from './home/home-dark/home-dark.component';
import { HomeLigthComponent } from './home/home-ligth/home-ligth.component';
import { HeaderSweetComponent } from './header/header-sweet/header-sweet.component';
import { HeaderDarkComponent } from './header/header-dark/header-dark.component';
import { HeaderLigthComponent } from './header/header-ligth/header-ligth.component';
import { LoaderElipsisComponent } from './loader-elipsis/loader-elipsis.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscribersModule } from '../subscribers/subscribers.module';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { CampaignModule } from '../retention/campaign/campaign.module';

const components = [
  HeaderInfoComponent,
  FooterComponent,
  BackTopComponent,
  BannerComponent,
  HeaderImageComponent,
  SearchPanelComponent,
  HomeSweetComponent,
  HomeDarkComponent,
  HeaderLigthComponent,
  HeaderSweetComponent,
  HeaderDarkComponent,
  HomeLigthComponent,
  LoaderElipsisComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    CatalogueModule,
    SubscribersModule,
    CampaignModule,
    ShopModule,
    NotificationModule,
  ],
  exports: [components],
})
export class SharedModule { }
