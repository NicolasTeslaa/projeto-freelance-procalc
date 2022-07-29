import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class OlaService {

  private baseUrl = 'https://localhost:7136';

  constructor(private http: HttpClient) { }

  DigaOi() : Observable<any> {
    return this.http.get<any>('https://localhost:7136/api/Hello/DigaOi', httpOptions);
  }
}