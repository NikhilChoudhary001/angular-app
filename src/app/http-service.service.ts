import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService<T> {

  constructor(private http: HttpClient) { }

  getData(): Observable<T> {
    return this.http.get("http://localhost:8081");
  }
}
