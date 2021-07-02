import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  routers = [
    { title: 'Angular', icon: 'ant-design', children: [
      { routerName: 'Angular6.x 入门', routerLink: '/angular/ng-get-started' },
      { routerName: 'Angular Example', routerLink: '/angular/ng-example' },
      { routerName: 'Angular 动画', routerLink: '/angular/ng-animation' },
      { routerName: 'Inject 依赖注入', routerLink: '/angular/inject' },
      { routerName: 'ngrx 示例', routerLink: '/angular/ngrx' },
      { routerName: '第三方插件', routerLink: '/angular/third-party' }
    ]},
    { title: 'Rxjs', icon: 'ant-design', children: [
      { routerName: 'Rxjs入门', routerLink: '/rxjs/rxjs-get-started' },
      { routerName: 'Rxjs 常用', routerLink: '/rxjs/rxjs-example' }
    ]},
    { title: 'Test', icon: 'ant-design', children: [
      { routerName: 'Test', routerLink: '/test' }
    ]}
  ];

  constructor(@Inject(APP_CONFIG) config : AppConfig) {
    console.log(config.title);
  }
}
