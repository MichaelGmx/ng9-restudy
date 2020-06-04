import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form2',
  templateUrl: './simple-form2.component.html',
  styleUrls: ['./simple-form2.component.scss']
})
export class SimpleForm2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value) {
    console.log(value);
  }
}
