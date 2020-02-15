import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMessagesComponent } from './basic-messages.component';
import { MessageSenderComponent } from '../../components/message-sender/message-sender.component';
import { MessageReceiverComponent } from '../../components/message-receiver/message-receiver.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('BasicMessagesComponent', () => {
  let component: BasicMessagesComponent;
  let fixture: ComponentFixture<BasicMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasicMessagesComponent, MessageSenderComponent, MessageReceiverComponent],
      imports: [SharedModule, ReactiveFormsModule]
    }).compileComponents();
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
