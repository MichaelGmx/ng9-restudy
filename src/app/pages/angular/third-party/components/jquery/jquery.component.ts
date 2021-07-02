import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.scss']
})
export class JqueryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#selector').addClass('lightseagreen');
  }

}
