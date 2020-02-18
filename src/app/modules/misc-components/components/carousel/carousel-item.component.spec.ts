import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItem } from './carousel-item.component';

describe('CarouselItemComponent', () => {
  let component: CarouselItem;
  let fixture: ComponentFixture<CarouselItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselItem]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
