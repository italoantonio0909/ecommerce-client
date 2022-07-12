import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { SliderContainerComponent } from './components/slider-container/slider-container.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/slider/slider.component';

const components = [SliderContainerComponent, SliderComponent]

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
