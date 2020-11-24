import { Component, Injectable, Injector, OnInit, ReflectiveInjector } from '@angular/core';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.scss']
})
export class InjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// 如下可以作了解

@Injectable({
  providedIn: 'root'
})
export class Body { }

@Injectable({
  providedIn: 'root'
})
export class Chassis { }

@Injectable({
  providedIn: 'root'
})
export class Engine {
  start() {
    console.log('引擎发动！');
  }
}

@Injectable()
export default class Car {
  constructor(
    private engine: Engine,
    private body: Body,
    private chassis: Chassis
  ) {}

  run() {
    this.engine.start();
  }
}

// 此处ReflectiveInjector的警告，表示已在Angular5+后被废弃。取而代之的是StaticInjector
// https://zhuanlan.zhihu.com/p/97116999
// const injectorOld = ReflectiveInjector.resolveAndCreate([Car, Engine, Chassis, Body]);
// const car = injectorOld.get(Car);
// car.run();

// 所以使用StaticInjector重构如下：
const injector = Injector.create([{ provide: Car, useClass: Car, deps: [ Engine, Chassis, Body ] }]);
const car = injector.get(Car);
car.run();

// 注意：大部分情况是不会如上面手动写注入依赖的，ReflectiveInjector、StaticInjector也是在main.ts的入口文件中有使用。
