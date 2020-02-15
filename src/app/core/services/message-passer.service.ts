import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagePasserService {
  private messageReceived: Subject<string> = new Subject<string>();

  public messageReceived$ = this.messageReceived.asObservable();

  constructor() {}

  public sendMessage(message: string): void {
    this.messageReceived.next(message);
  }
}
