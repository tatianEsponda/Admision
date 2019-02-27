import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint : string;

  constructor(private http: HttpClient) { 
    this.endpoint = 'http://localhost/books/public/index.php/';
  }

  getBooks() : Observable<any> {
    console.log("endpoint : " + this.endpoint);
    return this.http.get(this.endpoint + 'getBooks/').pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  
}
