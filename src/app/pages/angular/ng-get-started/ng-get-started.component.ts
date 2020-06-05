import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-ng-get-started',
  templateUrl: './ng-get-started.component.html',
  styleUrls: ['./ng-get-started.component.scss']
})
export class NgGetStartedComponent implements OnInit {
  homePageMsg = '來自NgGetStartedPage的消息';

  initialCount = 5;
  changeMsg: string;

  initialName = 'Mike';

  constructor(
    public mailService: MailService
  ) { }

  ngOnInit(): void {
  }

  countChange(event: number) {
    this.initialCount = event;
    this.changeMsg = `子組件change事件已觸發，當前值是：${event}`;
  }
}
