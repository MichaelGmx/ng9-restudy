import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-ng-animation',
  templateUrl: './ng-animation.component.html',
  styleUrls: ['./ng-animation.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'  // 注：属性名使用驼峰式命名
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class NgAnimationComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
