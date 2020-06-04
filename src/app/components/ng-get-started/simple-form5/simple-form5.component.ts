import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-simple-form5',
  templateUrl: './simple-form5.component.html',
  styleUrls: ['./simple-form5.component.scss']
})
export class SimpleForm5Component implements OnInit {
  lstOfMessage: string[];

  constructor(
    public mailService: MailService
  ) { }

  ngOnInit(): void {
    // this.lstOfMessage = this.mailService.getMessages();
  }

}
