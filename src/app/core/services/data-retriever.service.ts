import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonData } from '@shared/models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  constructor(private http: HttpClient) { }

  getJsonDataFile(fileName: string): Observable<JsonData> {
    return this.http.get<JsonData>(`assets/data/${fileName}.json`);
  }
}
