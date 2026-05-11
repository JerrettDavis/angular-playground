import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  standalone: false
})
export class CarouselItem {
  constructor(public elementRef: ElementRef) {}
}
