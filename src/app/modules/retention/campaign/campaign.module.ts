import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { SliderContainerComponent } from './components/slider-container/slider-container.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { SliderDarkComponent } from './components/slider-dark/slider-dark.component';
import { SliderContainerDarkComponent } from './components/slider-container-dark/slider-container-dark.component';

const components = [
  SliderContainerComponent,
  SliderDarkComponent,
  SliderComponent,
  SliderContainerDarkComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    SlickCarouselModule,
  ],
  exports: [components]
})
export class CampaignModule { }
