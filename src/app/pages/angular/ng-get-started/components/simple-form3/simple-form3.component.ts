import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form3',
  templateUrl: './simple-form3.component.html',
  styleUrls: ['./simple-form3.component.scss']
})
export class SimpleForm3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }
}
