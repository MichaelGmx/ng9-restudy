import { Component, OnInit } from '@angular/core';

import Inputmask from 'inputmask';

@Component({
  selector: 'app-inputmask',
  templateUrl: './inputmask.component.html',
  styleUrls: ['./inputmask.component.scss']
})
export class InputmaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // 初始化 Inputmask
    Inputmask().mask(document.getElementById('selector1'));
    Inputmask({"mask": "(999) 9999-9999"}).mask(document.getElementById('selector2'));
  }

}
