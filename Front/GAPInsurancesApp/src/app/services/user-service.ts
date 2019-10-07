import { Injector, OnInit } from '@angular/core';
import { CustomerModel } from '../models/Customer-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:60681/token';

  constructor(
    private http: HttpClient
  ) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'x-www-form-urlencoded'
    })
  };


  getToken(username: string, password: string): Observable<TokenModel> {

    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password');

    return this.http.post<TokenModel>(`${this.apiUrl}`, body.toString(), this.httpOptions)
    .pipe(
        catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
