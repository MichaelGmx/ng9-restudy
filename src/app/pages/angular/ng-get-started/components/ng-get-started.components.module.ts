import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimpleForm1Component } from './simple-form1/simple-form1.component';
import { SimpleForm2Component } from './simple-form2/simple-form2.component';
import { SimpleForm3Component } from './simple-form3/simple-form3.component';
import { SimpleForm4Component } from './simple-form4/simple-form4.component';
import { SimpleForm5Component } from './simple-form5/simple-form5.component';
import { SimpleForm6Component } from './simple-form6/simple-form6.component';
import { SimpleForm7Component } from './simple-form7/simple-form7.component';
import { SimpleForm8Component } from './simple-form8/simple-form8.component';
import { SimpleForm9Component } from './simple-form9/simple-form9.component';
import { SimpleForm10Component } from './simple-form10/simple-form10.component';

const components = [
  SimpleForm1Component,
  SimpleForm2Component,
  SimpleForm3Component,
  SimpleForm4Component,
  SimpleForm5Component,
  SimpleForm6Component,
  SimpleForm7Component,
  SimpleForm8Component,
  SimpleForm9Component,
  SimpleForm10Component
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: components,
  exports: components
})
export class NgGetStartedComponentsModule { }
