import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { of, from, fromEvent, merge } from 'rxjs';
import { mergeMap, map, scan, mapTo, flatMap, takeUntil, tap, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-get-started',
  templateUrl: './rxjs-get-started.component.html',
  styleUrls: ['./rxjs-get-started.component.scss']
})
export class RxjsGetStartedComponent implements OnInit, AfterViewInit {
  @ViewChild('btnPlus') btnPlus: ElementRef;
  @ViewChild('btnMinus') btnMinus: ElementRef;
  @ViewChild('counter') counter: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('inputSearch') inputSearch: ElementRef;

  // source$ = of('Hello');
  // example$ = this.source$.pipe(mergeMap(val => of(`${val} World`)));
  // subscript = this.example$.subscribe(val => console.log(val));

  constructor() {

  }

  ngAfterViewInit() {
    /**
     * Rxjs 簡單實現
     */
    // fromEvent(window, 'click')
    //   .pipe(map(e => e.target))
    //   .subscribe(value => {
    //     console.log('click:', value);
    //   });


    /**
     * Rxjs 使用更多操作符
     */
    // fromEvent(window, 'click')
    //   // .pipe(map(e => 1))
    //   .pipe(mapTo(1))
    //   .pipe(scan((total, now) => total + now))
    //   .subscribe(value => {
    //     console.log('click:', value);
    //   });


    /**
     * Rxjs 實現加1減1控件
     */
    merge(
      fromEvent(this.btnPlus.nativeElement, 'click').pipe(mapTo(1)),
      fromEvent(this.btnMinus.nativeElement, 'click').pipe(mapTo(-1))
    ).pipe(scan((total, now) => total + now))
    .subscribe(value => this.counter.nativeElement.innerHTML = value);


    /**
     * canvas畫圖實現
     */
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.beginPath();

    function draw(e) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }

    // Rxjs寫法
    fromEvent(this.canvas.nativeElement, 'mousedown')
      .pipe(tap((event: any) => ctx.moveTo(event.offsetX, event.offsetY)))
      .pipe(flatMap(
          event => fromEvent(this.canvas.nativeElement, 'mousemove')
            .pipe(takeUntil(fromEvent(this.canvas.nativeElement, 'mouseup')))
      ))
      .subscribe(event => {
        draw(event);
      });

    // // 普通寫法
    // this.canvas.nativeElement.addEventListener('mousedown', function (e) {
    //   ctx.moveTo(e.offsetX, e.offsetY);
    //   this.canvas.nativeElement.addEventListener('mousemove', draw);
    // });
    // this.canvas.nativeElement.addEventListener('mouseup', function (e) {
    //   this.canvas.nativeElement.removeEventListener('mousemove', draw);
    // });


    /**
     * Http請求
     */
    // function sendRequest(keywords) {
    //   return fetch(`http://www.fakewebsite.com/api/search${keywords}`).then(res => res.json());
    // }

    // fromEvent(this.inputSearch.nativeElement, 'input')
    //   .pipe(debounceTime(250))                 // debounceTime 每隔250ms執行一次（防止跳動）
    //   .pipe(map((e: any) => e.target.value))
    //   .pipe(switchMap(value => {
    //     return (value.length > 1) ? of([]) : from(sendRequest(value)).pipe(map(res => res[1]));  // 輸入為空時，傳遞空數組（防止使用空請求數據）
    //   }))  // switchMap 僅返回最後一次請求的結果（防止多次請求，前一次結果比後一次結果晚到）
    //   .subscribe(value => console.log(value));
  }

  ngOnInit(): void {

  }

}
