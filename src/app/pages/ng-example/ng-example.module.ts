import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgExampleRoutingModule } from './ng-example-routing.module';

import { NgExampleComponent } from './ng-example.component';
import { ExampleComponentsModule } from 'src/app/components/example/example.components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgExampleRoutingModule,
    ExampleComponentsModule
  ],
  declarations: [
    NgExampleComponent
  ],
  exports: [NgExampleComponent]
})
export class NgExampleModule { }
