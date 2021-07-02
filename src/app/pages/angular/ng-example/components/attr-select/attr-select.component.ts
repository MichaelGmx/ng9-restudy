import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-attr-select',
  templateUrl: './attr-select.component.html',
  styleUrls: ['./attr-select.component.scss']
})
export class AttrSelectComponent implements OnInit {
  @Input() attrs: any[];
  @Output() itemSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectAttr(objAttr) {
    this.itemSelect.emit(objAttr);
  }
}
