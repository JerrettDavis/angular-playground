import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMessagesComponent } from './basic-messages.component';

describe('BasicMessagesComponent', () => {
  let component: BasicMessagesComponent;
  let fixture: ComponentFixture<BasicMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
