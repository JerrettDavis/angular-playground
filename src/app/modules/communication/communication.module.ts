import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicMessagesComponent } from './pages/basic-messages/basic-messages.component';
import { CommunicationRoutingModule } from './communication-routing.module';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MessageReceiverComponent } from './components/message-receiver/message-receiver.component';

@NgModule({
  declarations: [BasicMessagesComponent, MessageSenderComponent, MessageReceiverComponent],
  imports: [CommonModule, CoreModule, CommunicationRoutingModule, SharedModule]
})
export class CommunicationModule {}
