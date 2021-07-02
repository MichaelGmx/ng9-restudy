import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { CountingDirective } from './counting.directive';
import { InputMaskDirective } from './input-mask.directive';

const directives = [
  HighlightDirective,
  CountingDirective,
  UnlessDirective,
  InputMaskDirective
];

@NgModule({
  imports: [ CommonModule ],
  declarations: directives,
  exports: directives
})
export class DirectivesModule { }
