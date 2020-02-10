import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessagePasserService} from '../../../../core/services/message-passer.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss']
})
export class MessageSenderComponent implements OnInit {
  title = 'Playground';
  formGroup: FormGroup;

  constructor(private messagePasserService: MessagePasserService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      message: ['']
    });
  }

  public sendMessage(): void {
    this.messagePasserService.sendMessage(this.formGroup.value.message);
    this.formGroup.reset();
  }
}
