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
      { routerName: 'Angular6.x 入门', routerLink: 'angular/ng-get-started' },
      { routerName: 'Angular Example', routerLink: 'angular/ng-example' },
      { routerName: 'Dom Event', routerLink: 'angular/dom-event' },
      { routerName: 'ngrx 展示页1', routerLink: 'angular/ngrx1' },
      { routerName: 'ngrx 展示页2', routerLink: 'angular/ngrx2' }
    ]},
    { title: 'Rxjs', icon: 'ant-design', children: [
      { routerName: 'Rxjs入门', routerLink: 'rxjs/rxjs-get-started' },
      { routerName: 'Rxjs 常用', routerLink: 'rxjs/rxjs-example' }
    ]},
    { title: 'Test', icon: 'ant-design', children: [
      { routerName: 'Test', routerLink: 'test' }
    ]}
  ];
}
