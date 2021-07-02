import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ngrx1Component } from './ngrx1/ngrx1.component';
import { Ngrx2Component } from './ngrx2/ngrx2.component';

const components = [
  Ngrx1Component,
  Ngrx2Component
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class NgRxDemoModule { }
