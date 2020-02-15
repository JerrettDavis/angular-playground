import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../../shared/material.module';
import { MiscComponentsRoutingModule } from './misc-components-routing.module';

@NgModule({
  declarations: [CarouselComponent, HomeComponent],
  imports: [MiscComponentsRoutingModule, MaterialModule]
})
export class MiscComponentsModule {}
