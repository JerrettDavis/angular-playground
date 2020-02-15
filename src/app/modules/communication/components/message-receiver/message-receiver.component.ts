import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessagePasserService } from '../../../../core/services/message-passer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.scss']
})
export class MessageReceiverComponent implements OnInit, OnDestroy {
  messages: BasicMessage[] = [];
  private subscription: Subscription;

  constructor(private messagePasserService: MessagePasserService) {}

  ngOnInit() {
    this.subscription = this.messagePasserService.messageReceived$.subscribe(message =>
      this.messages.unshift({ received: new Date(), message })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

interface BasicMessage {
  received: Date;
  message: string;
}
