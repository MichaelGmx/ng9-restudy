import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgGetStartedRoutingModule } from './ng-get-started-routing.module';

import { NgGetStartedComponent } from './ng-get-started.component';
import { NgGetStartedComponentsModule } from 'src/app/components/ng-get-started/ng-get-started.components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgGetStartedRoutingModule,
    NgGetStartedComponentsModule
  ],
  declarations: [
    NgGetStartedComponent
  ],
  exports: [NgGetStartedComponent],
  providers: [
    { provide: 'apiUrl', useValue: 'http://192.168.3.103:3000/api' }
  ]
})
export class NgGetStartedModule { }
