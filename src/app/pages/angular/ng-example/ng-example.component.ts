import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { SingletonDemoService } from 'src/app/services/singleton.demo.service';

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

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  username: string;

  demoCondition = true;
  demoList = [1, 2, 3];

  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lesson 2'];

  heroes = [
    { name: 'Ann' },
    { name: 'Niko' },
    { name: 'IconMan' },
    { name: 'SuperMan' },
    { name: 'Big Big' }
  ]

  constructor(
    private singletonDemoService: SingletonDemoService
  ) {}

  ngOnInit(): void {}

  onChange(event) {
    this.objAttrSelect = event;
  }



  // 單例Service
  save() {
    this.singletonDemoService.setUserName('Test Singleton');
  }
  load() {
    this.username = this.singletonDemoService.getUserName();
  }



  trackById(index: number, hero: { id, name }) {
    return hero.id;
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.valid);
  }

}
