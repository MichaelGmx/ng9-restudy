import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrSelectComponent } from './attr-select/attr-select.component';
import { DomEventComponent } from './dom-event/dom-event.component';



@NgModule({
  declarations: [
    AttrSelectComponent,
    DomEventComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttrSelectComponent,
    DomEventComponent
  ]
})
export class NgExampleComponentsModule { }
