import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReceiverComponent } from './message-receiver.component';
import {SharedModule} from '../../../../shared/shared.module';

describe('MessageReceiverComponent', () => {
  let component: MessageReceiverComponent;
  let fixture: ComponentFixture<MessageReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageReceiverComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
