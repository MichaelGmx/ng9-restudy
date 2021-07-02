import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AttrSelectComponent } from './attr-select/attr-select.component';
import { DomEventComponent } from './dom-event/dom-event.component';
import { NgContentDemoComponent } from './ng-content-demo/ng-content-demo.component';
import { HeroesListComponent } from './heroes-list/heroes-list/heroes-list.component';
import { HeroTaxReturnComponent } from './heroes-list/hero-tax-return/hero-tax-return.component';


const components = [
  AttrSelectComponent,
  DomEventComponent,
  NgContentDemoComponent,
  HeroesListComponent,
  HeroTaxReturnComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class NgExampleComponentsModule { }
