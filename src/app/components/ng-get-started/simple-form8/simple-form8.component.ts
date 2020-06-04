import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form8',
  templateUrl: './simple-form8.component.html',
  styleUrls: ['./simple-form8.component.scss']
})
export class SimpleForm8Component implements OnInit {
  @Input() name: string;
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
    this.name = (this.name === 'Mike') ? 'Ann' : 'Mike';
    this.nameChange.emit(this.name);
  }
}
