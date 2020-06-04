import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';
// import { concat } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  // 尽可能使用concat(rxjs)的静态方法
  // concat(rxjs/operators)的操作符方式已被移除
  sourceOne = of(1, 2, 3);
  sourceTwo = of(4, 5, 6);
  // example = this.sourceOne.pipe(concat(this.sourceTwo));  // 此方式已被移除，虽然运行正常，但最好使用下面的方式
  example = concat(this.sourceOne, this.sourceTwo);
  subscribe = this.example.subscribe(val => console.log('Example: Basic concat: ', val));

  constructor() { }

  ngOnInit(): void {
  }
}
