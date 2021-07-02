import { Component, OnInit } from '@angular/core';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private sheetService: SheetService
  ) { }

  ngOnInit(): void {
    // this.fetchSheet();
  }

  fetchSheet() {
    this.sheetService.getSongSheetDetail(24381616)
      .subscribe(res => console.log(res));
  }

}
