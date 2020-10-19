import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  constructor(private http: HttpClient) { }

  getJsonDataFile<T>(fileName: string): Observable<T> {
    return this.http.get<T>(`assets/data/${fileName}.json`);
  }
}
