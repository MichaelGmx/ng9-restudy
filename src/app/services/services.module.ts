import { NgModule, InjectionToken } from '@angular/core';

export const API_CONFIG = new InjectionToken<string>('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [

  ],
  providers: [
    { provide: API_CONFIG, useValue: '//localhost:3000/' }
  ]
})
export class ServicesModule { }
