import { Component } from '@angular/core';

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
      { routerName: 'ngrx 示例', routerLink: '/angular/ngrx' },
      { routerName: 'angularx-qrcode 示例', routerLink: '/angular/angularx-qrcode' },
      { routerName: 'html2canvas 示例', routerLink: '/angular/html2canvas' },
      { routerName: 'Inject 依赖注入', routerLink: '/angular/inject' }
    ]},
    { title: 'Rxjs', icon: 'ant-design', children: [
      { routerName: 'Rxjs入门', routerLink: '/rxjs/rxjs-get-started' },
      { routerName: 'Rxjs 常用', routerLink: '/rxjs/rxjs-example' }
    ]},
    { title: 'Test', icon: 'ant-design', children: [
      { routerName: 'Test', routerLink: '/test' }
    ]}
  ];
}
