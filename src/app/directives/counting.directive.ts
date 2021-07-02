import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'button[counting]'
})
export class CountingDirective {

  numberOfClick = 0;

  @HostListener('click', ['$event.target']) onClick(btn: HTMLElement) {
    console.log('button', btn, 'number of clicks:', ++this.numberOfClick);
  }

}
