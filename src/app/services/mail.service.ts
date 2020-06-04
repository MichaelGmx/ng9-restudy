import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule
})
export class MailService {
  message: string = '該消息來自MailService';

  messages: string[] = [
    'Angluar',
    'HTML',
    'Scss',
    'Javascript'
  ];

  constructor() { }

  getMessages() {
    return this.messages;
  }
}
