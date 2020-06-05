import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsGetStartedRoutingModule } from './rxjs-get-started-routing.module';
import { RxjsGetStartedComponent } from './rxjs-get-started.component';


@NgModule({
  declarations: [RxjsGetStartedComponent],
  imports: [
    CommonModule,
    RxjsGetStartedRoutingModule
  ]
})
export class RxjsGetStartedModule { }
