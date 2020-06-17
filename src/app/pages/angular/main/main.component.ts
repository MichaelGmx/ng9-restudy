import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  router: any;

  constructor(
    private app: AppComponent
  ) {
    this.router = this.app.routers.filter(item => item.title === 'Angular')[0];
  }

  ngOnInit(): void {
  }

}
