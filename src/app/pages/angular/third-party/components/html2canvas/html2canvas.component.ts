import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import * as html2canvas from 'html2canvas';

declare var html2canvas;

@Component({
  selector: 'app-html2canvas',
  templateUrl: './html2canvas.component.html',
  styleUrls: ['./html2canvas.component.scss']
})
export class Html2canvasComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  @ViewChild('result') result: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  createCanvas() {
    const element = this.container.nativeElement;
    console.log('element', element);
    if (element) {
      html2canvas(element).then(canvas => {
        this.result.nativeElement.appendChild(canvas);
      });
    }
  }

}
