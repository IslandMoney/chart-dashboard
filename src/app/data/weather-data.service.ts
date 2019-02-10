import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  httpOptions = { headers: new HttpHeaders({ 'Allow-Control-Allow-Origin': '*' }) };
  weatherDataService: Array<any>;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/api/weathers', this.httpOptions)
      .pipe(map(result => result));
  }

}