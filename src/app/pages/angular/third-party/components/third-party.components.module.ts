import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QRCodeModule } from 'angularx-qrcode';

import { AngularxQrcodeComponent } from './angularx-qrcode/angularx-qrcode.component';
import { Html2canvasComponent } from './html2canvas/html2canvas.component';
import { InputmaskComponent } from './inputmask/inputmask.component';
import { JqueryComponent } from './jquery/jquery.component';

import { DirectivesModule } from 'src/app/directives/directive.module';

const components = [
  AngularxQrcodeComponent,
  Html2canvasComponent,
  InputmaskComponent,
  JqueryComponent
]

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,

    QRCodeModule            // angularx-qrcode 插件
  ],
  declarations: components,
  exports: components
})
export class ThirdPartyComponentsModule { }
