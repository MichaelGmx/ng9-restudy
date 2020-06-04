import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-example',
  templateUrl: './ng-example.component.html',
  styleUrls: ['./ng-example.component.scss']
})
export class NgExampleComponent implements OnInit {
  lstOfAttr = [
    { SysID: 1, AttrDesci: '白色', blnSelect: false },
    { SysID: 2, AttrDesci: '黑色', blnSelect: false },
    { SysID: 3, AttrDesci: '粉色', blnSelect: false },
    { SysID: 4, AttrDesci: '紫色', blnSelect: false },
    { SysID: 5, AttrDesci: '藍色', blnSelect: false }
  ];
  objAttrSelect: any;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.objAttrSelect = event;
  }
}
