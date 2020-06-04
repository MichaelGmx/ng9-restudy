import { NgModule, InjectionToken } from '@angular/core';

export const API_CONFIG = new InjectionToken<string>('ApiConfigToken');
export const EW_APIURL = new InjectionToken<string>('EWApiUrlToken');

@NgModule({
  declarations: [],
  imports: [

  ],
  providers: [
    { provide: API_CONFIG, useValue: '//localhost:3000/' },
    { provide: EW_APIURL, useValue: '//testapi.q-pets.com/prjEW_webapi/api/clientApi/' }
  ]
})
export class ServicesModule { }
