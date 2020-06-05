import { Component, OnInit } from '@angular/core';
import { of, concat, timer, interval, Observable } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap } from 'rxjs/operators';
// import { concat } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  // /**
  //  * concat
  //  * -- 按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值
  //  * 尽可能使用concat(rxjs)的静态方法
  //  * concat(rxjs/operators)的操作符方式已被移除
  //  */
  // sourceOne = of(1, 2, 3);
  // sourceTwo = of(4, 5, 6);
  // // example = this.sourceOne.pipe(concat(this.sourceTwo));  // 此方式已被移除，虽然运行正常，但最好使用下面的方式
  // example = concat(this.sourceOne, this.sourceTwo);
  // subscribe = this.example.subscribe(val => console.log('Example: Basic concat: ', val));
  // // Example: Basic concat: 1
  // // Example: Basic concat: 2
  // // Example: Basic concat: 3
  // // Example: Basic concat: 4
  // // Example: Basic concat: 5
  // // Example: Basic concat: 6

  /**
   * concatMap
   * -- 将值映射成内部 observable，并按顺序订阅和发出。
   */
  source = of(2000, 1000);
  example = this.source.pipe(
    concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  );

  subscribe = this.example.subscribe(val => {
    console.log(`With concatMap: ${val}`);
  });


  // /**
  //  * switchMap
  //  * -- 在每次发出时，会取消前一个内部 observable (你所提供函数的结果) 的订阅，然后订阅一个新的 observable
  //  */
  // source = timer(0, 5000); // 每5秒發出值
  // example = this.source.pipe(switchMap(() => interval(500)));  // 每5秒重新計數
  // subscribe = this.example.subscribe(val => console.log(val));


  constructor() { }

  ngOnInit(): void {
  }

  onTyping(event) {
    console.log(event.target.value);
    // this.getKeyWors()
    //   .pipe(
    //     switchMap(() => interval(500))
    //   ).subscribe(res => console.log(res));
  }

  private getKeyWors(): Observable<string[]> {
    return of(['asdf', 'ert', 'zxcv']);
  }
}