import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularRoutingModule } from './angular-routing.module';

import { DirectivesModule } from 'src/app/directives/directive.module';

import { NgExampleComponentsModule } from 'src/app/pages/angular/ng-example/components/ng-example.components.module';
import { NgGetStartedComponentsModule } from 'src/app/pages/angular/ng-get-started/components/ng-get-started.components.module';
import { NgRxDemoModule } from './ngrx-demo/components/ngrx-demo.components.module';
import { ThirdPartyComponentsModule } from './third-party/components/third-party.components.module';

import { CartStoreModule } from 'src/app/store/cart/cart.store.module';

import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';
import { NgrxDemoComponent } from './ngrx-demo/ngrx-demo.component';
import { MainComponent } from './main/main.component';
import { NgAnimationComponent } from './ng-animation/ng-animation.component';

import { InjectComponent } from './inject/inject.component';
import { ThirdPartyComponent } from './third-party/third-party.component';


@NgModule({
  declarations: [
    MainComponent,
    NgGetStartedComponent,
    NgExampleComponent,
    NgrxDemoComponent,
    NgAnimationComponent,
    InjectComponent,
    ThirdPartyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    // 组件
    NgExampleComponentsModule,
    NgGetStartedComponentsModule,
    NgRxDemoModule,
    ThirdPartyComponentsModule,

    // 指令
    DirectivesModule,

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
