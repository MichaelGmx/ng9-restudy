import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form6',
  templateUrl: './simple-form6.component.html',
  styleUrls: ['./simple-form6.component.scss']
})
export class SimpleForm6Component implements OnInit {
  @Input() message: string;

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
