import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of, concat, merge, zip, timer, interval, Observable, fromEvent, throwError } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchMap, last, finalize, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {
  @ViewChild('myBtn', {static: true}) myBtn: ElementRef;

  /**********
   * 以下內容基于rxjs6.x版本
   */

  // /**
  //  * concat   静态方法
  //  * -- 按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值
  //  * 尽可能使用concat(rxjs)的静态方法
  //  * 虽然rxjs6.x 向下兼容 concat(rxjs/operators)的操作符 但将来会被移除
  //  */
  // sourceOne$ = of(1, 2, 3).pipe(delay(3000));
  // sourceTwo$ = of(4, 5, 6);
  // // example$ = this.sourceOne$.pipe(concat(this.sourceTwo$));  // 此方式已被移除，虽然运行正常，但最好使用下面的方式
  // subscribe$ = concat(
  //   this.sourceOne$,
  //   this.sourceTwo$,
  // ).subscribe(val => console.log('Example: Basic concat: ', val));
  // // 【sourceTwo$会等待3s 在sourceOne$结束后，再继续，最终在3s后一同输出返回值】
  // // 【目的是：等待第一个完成后，再执行下一个】
  // // Example: Basic concat: 1
  // // Example: Basic concat: 2
  // // Example: Basic concat: 3
  // // Example: Basic concat: 4
  // // Example: Basic concat: 5
  // // Example: Basic concat: 6



  // /**
  //  * merge   静态方法
  //  * -- 同时进行，多个 observable 完成后一同发出订阅
  //  */
  // first$ = of('1').pipe(delay(2000));
  // second$ = of('2').pipe(delay(1000));
  // thrid$ = of('3').pipe(delay(3000));
  // subscribe$ = merge(
  //   this.first$,
  //   this.second$,
  //   this.thrid$,
  // ).subscribe(res => console.log(res));
  // // 【first$、second$、thrid$一同开始，最快的先输出】
  // // 2
  // // 1
  // // 3



  // /**
  //  * zip   静态方法
  //  * -- 一直等到所有 observables 都发出一个值，才将所有值作为数组发出
  //  * 与concat相似，但zip会将 observables 合并为一个数组
  //  */
  // sourceOne$ = of('Hello');
  // sourceTwo$ = of('World!').pipe(delay(1000));
  // sourceThree$ = of('Goodbye').pipe(delay(2000));
  // sourceFour$ = of('World!').pipe(delay(3000));
  // subscribe$ = zip(
  //   this.sourceOne$,
  //   this.sourceTwo$,
  //   this.sourceThree$,
  //   this.sourceFour$
  // ).subscribe(val => console.log(val));
  // // ["Hello", "World!", "Goodbye", "World!"]



  // /**
  //  * concatMap   操作符
  //  * -- 将值映射成内部 observable，并按顺序订阅和发出。
  //  */
  // source$ = of(2000, 1000);
  // example$ = this.source$.pipe(
  //   concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  // );
  // subscribe$ = this.example$.subscribe(val => {
  //   console.log(`With concatMap: ${val}`);
  // });
  // // 【延迟2000ms的observable完成后，再订阅延迟1000ms的observable。一共使用3000ms输出全部】
  // // With concatMap: Delayed by: 2000ms
  // // With concatMap: Delayed by: 1000ms



  // /**
  //  * mergeMap   操作符
  //  * -- 映射成 observable 并发出值。
  //  */
  // source$ = of(2000, 1000);
  // example$ = this.source$.pipe(
  //   mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  // );
  // subscribe$ = this.example$.subscribe(val => {
  //   console.log(`With concatMap: ${val}`);
  // });
  // // 【延迟1000ms的observable更快最先发出，然后是延迟2000ms的observable】
  // // With concatMap: Delayed by: 1000ms
  // // With concatMap: Delayed by: 2000ms


  // // > concatMap 和 mergeMap 之间的区别。
  // // > 因为 concatMap 之前前一个内部 observable 完成后才会订阅下一个， source 中延迟 2000ms 值会先发出。
  // // > 对比的话， mergeMap 会立即订阅所有内部 observables， 延迟少的 observable (1000ms) 会先发出值，然后才是 2000ms 的 observable 。



  // /**
  //  * switchMap   操作符
  //  * -- 在每次发出时，会取消前一个内部 observable (你所提供函数的结果) 的订阅，然后订阅一个新的 observable
  //  */
  // source$ = timer(0, 5000); // 每5秒發出值
  // example$ = this.source$.pipe(switchMap(() => interval(500)));  // 每0.5秒重新計數
  // subscribe$ = this.example$.subscribe(val => console.log(val));



  // /**
  //  * 综合示例：多个请求链式获取结果，最终获取最后一个的结果
  //  * 后一个的执行，需要得到前一个的结果后，才可以进行
  //  */
  // first$ = of('isConnected').pipe(delay(1000));
  // second$ = of({ address: 'DC:1D:30:9A:F9:7B', name: 'Printer_F97B' }).pipe(delay(2000));
  // // second$ = throwError(new Error('second error'));
  // thrid$ = of('OK').pipe(delay(1000));

  // subscribe = this.first$
  //   .pipe(
  //     concatMap(res => this.second$),
  //     concatMap(res => this.thrid$)
  //   ).subscribe(res => {
  //     console.log(res);
  //   }, err => {
  //     console.log(err);
  //   });


  constructor() { }

  ngOnInit(): void {

    /**
     * switchMap 示例 - 触发部分
     * 点击按钮，使用switchMap，只获取最后一次得到的值
     */
    const btnClick$ = fromEvent(this.myBtn.nativeElement, 'click');
    btnClick$.pipe(
      switchMap(_ => this.getKeyWors())
    ).subscribe(res => console.log(res));
  }

  /**
   * switchMap 示例 - 请求部分
   * 假设请求需要较长时间才返回
   */
  private getKeyWors(): Observable<string[]> {
    return of(['asdf', 'ert', 'zxcv']).pipe(
      delay(3000)
    );
  }
}
