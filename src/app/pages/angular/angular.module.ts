import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularRoutingModule } from './angular-routing.module';

import { ExampleComponentsModule } from 'src/app/components/example/example.components.module';
import { NgGetStartedComponentsModule } from 'src/app/components/ng-get-started/ng-get-started.components.module';

import { AngularComponent } from './main/angular.component';
import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';
import { NgrxPage1Component } from './ngrx-page1/ngrx-page1.component';
import { NgrxPage2Component } from './ngrx-page2/ngrx-page2.component';
import { CartStoreModule } from 'src/app/store/cart/cart.store.module';


@NgModule({
  declarations: [
    AngularComponent,
    NgGetStartedComponent,
    NgExampleComponent,
    NgrxPage1Component,
    NgrxPage2Component
  ],
  imports: [
    CommonModule,
    FormsModule,

    // 组件
    ExampleComponentsModule,
    NgGetStartedComponentsModule,

    // ngrx/store 购物车
    CartStoreModule,

    // 路由
    AngularRoutingModule
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'http://192.168.3.103:3000/api' }  // 注入 常量
  ]
})
export class AngularModule { }
