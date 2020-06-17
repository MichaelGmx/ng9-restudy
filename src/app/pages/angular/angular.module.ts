import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularRoutingModule } from './angular-routing.module';

import { NgExampleComponentsModule } from 'src/app/components/ng-example/ng-example.components.module';
import { NgGetStartedComponentsModule } from 'src/app/components/ng-get-started/ng-get-started.components.module';

import { CartStoreModule } from 'src/app/store/cart/cart.store.module';

import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';
import { NgrxPageComponent } from './ngrx-page/ngrx-page.component';
import { MainComponent } from './main/main.component';
import { NgAnimationComponent } from './ng-animation/ng-animation.component';


@NgModule({
  declarations: [
    MainComponent,
    NgGetStartedComponent,
    NgExampleComponent,
    NgrxPageComponent,
    NgAnimationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    // 组件
    NgExampleComponentsModule,
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
