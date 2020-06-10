import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dom-event',
  templateUrl: './dom-event.component.html',
  styleUrls: ['./dom-event.component.scss']
})
export class DomEventComponent implements OnInit {
  @ViewChild('eleObj', { static: true }) private eleObj: ElementRef;

  private domObj: HTMLDivElement;

  constructor() { }

  ngOnInit(): void {
    this.domObj = this.eleObj.nativeElement;
    fromEvent(this.domObj, 'touchend')
      .subscribe(
        (event: TouchEvent) => alert(event)
      );
  }

}


// 可用事件名称有：click、mousedown、mouseup、mousemove、touchstart、touchend、touchmove
// HTML DOM Event对象实例参考： https://www.w3school.com.cn/jsref/dom_obj_event.asp
