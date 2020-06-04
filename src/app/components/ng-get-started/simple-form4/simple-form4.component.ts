import { Component, OnInit, Inject } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-simple-form4',
  templateUrl: './simple-form4.component.html',
  styleUrls: ['./simple-form4.component.scss']
})
export class SimpleForm4Component implements OnInit {

  constructor(
    // public mailService: MailService          // 方式1
    @Inject(MailService) public mailService,    // 方式2

    @Inject('apiUrl') public apiUrl             // Inject 装饰器一般用来注入非 Type 类型的对象。
  ) { }

  ngOnInit(): void {
  }

}
