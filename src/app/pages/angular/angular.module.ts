import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularRoutingModule } from './angular-routing.module';

import { ExampleComponentsModule } from 'src/app/components/example/example.components.module';
import { NgGetStartedComponentsModule } from 'src/app/components/ng-get-started/ng-get-started.components.module';

import { AngularComponent } from './main/angular.component';
import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';


@NgModule({
  declarations: [
    AngularComponent,
    NgGetStartedComponent,
    NgExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    // 路由
    AngularRoutingModule,

    // 组件
    ExampleComponentsModule,
    NgGetStartedComponentsModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'http://192.168.3.103:3000/api' }
  ]
})
export class AngularModule { }
