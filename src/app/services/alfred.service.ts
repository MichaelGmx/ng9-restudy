import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicesModule, EW_APIURL } from './services.module';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

export type AlfredData = {
  ProvinceList: any[];
  CityList: any[];
  DistrictList: any[];
};

@Injectable({
  providedIn: ServicesModule
})
export class AlfredService {

  constructor(
    private http: HttpClient,
    @Inject(EW_APIURL) private apiUrl: string
  ) { }

  getAlfredData(): Observable<any> {
    return this.http.post(this.apiUrl + 'getAlfredExpressTree_Obj', {}).pipe(
      pluck('data')
    );
  }
}
