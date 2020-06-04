import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrSelectComponent } from './attr-select/attr-select.component';



@NgModule({
  declarations: [
    AttrSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttrSelectComponent
  ]
})
export class ExampleComponentsModule { }
