import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../../shared/material.module';
import { MiscComponentsRoutingModule } from './misc-components-routing.module';
import { CarouselItem } from './components/carousel/carousel-item.component';
import { CarouselItemContentDirective } from './components/carousel/carousel-item-content.directive';

@NgModule({
  declarations: [CarouselComponent, HomeComponent, CarouselItem, CarouselItemContentDirective],
  imports: [MiscComponentsRoutingModule, MaterialModule]
})
export class MiscComponentsModule {}
