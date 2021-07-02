import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SongSheet } from '../types/song';
import { API_CONFIG } from './services.module';


@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private url: string
  ) { }

  getPersonalSheetList(): Observable<SongSheet[]> {
    return this.http.get(this.url + 'personalized')
      .pipe(map((res: { result: SongSheet[]}) => res.result.slice(0, 16)));
  }

  getSongSheetDetail(id: number): Observable<SongSheet> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.url + 'playlist/detail', { params })
      .pipe(map((res: { playlist: SongSheet }) => res.playlist ));
  }
}
