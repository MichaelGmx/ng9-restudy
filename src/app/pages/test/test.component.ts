import { Component, OnInit } from '@angular/core';
import { SheetService } from 'src/app/services/sheet.service';
import { AlfredService } from 'src/app/services/alfred.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private sheetService: SheetService,
    private alfredService: AlfredService
  ) { }

  ngOnInit(): void {
    // this.fetchSheet();
    // this.fetchAlfredData();
  }

  fetchSheet() {
    this.sheetService.getSongSheetDetail(24381616)
      .subscribe(res => console.log(res));
  }

  fetchAlfredData() {
    this.alfredService.getAlfredData()
      .subscribe(res => console.log(res));
  }

}
