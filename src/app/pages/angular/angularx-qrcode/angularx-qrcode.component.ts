import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularx-qrcode',
  templateUrl: './angularx-qrcode.component.html',
  styleUrls: ['./angularx-qrcode.component.scss']
})
export class AngularxQrcodeComponent implements OnInit {

  public myAngularxQrCode: string = null;

  constructor() {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit(): void {
  }

}
