import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrSelectComponent } from './attr-select/attr-select.component';
import { DomEventComponent } from './dom-event/dom-event.component';
import { Ngrx1Component } from './ngrx1/ngrx1.component';
import { Ngrx2Component } from './ngrx2/ngrx2.component';



@NgModule({
  declarations: [
    AttrSelectComponent,
    DomEventComponent,
    Ngrx1Component,
    Ngrx2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttrSelectComponent,
    DomEventComponent,
    Ngrx1Component,
    Ngrx2Component
  ]
})
export class NgExampleComponentsModule { }
