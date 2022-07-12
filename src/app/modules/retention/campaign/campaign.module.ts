import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { SliderContainerComponent } from './slider-container/slider-container.component';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
