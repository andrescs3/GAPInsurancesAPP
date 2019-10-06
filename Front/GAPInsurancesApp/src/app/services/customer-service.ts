import { Injector, OnInit } from '@angular/core';
import { CustomerModel } from '../models/Customer-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:60681/api/';

  constructor(
    private http: HttpClient
  ) {
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  public getAll(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(`${this.apiUrl}Customers`);
  }

  getCustomer(id: number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${this.apiUrl}Customers/` + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  createCustomer(Customer: CustomerModel): Observable<CustomerModel> {
    return this.http.post<CustomerModel>(`${this.apiUrl}Customers` , JSON.stringify(Customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateCustomer(id: number, Customer: CustomerModel): Observable<CustomerModel> {
    return this.http.put<CustomerModel>(`${this.apiUrl}Customers/` + id, JSON.stringify(Customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  deleteCustomer(id: number) {
    return this.http.delete<CustomerModel>(`${this.apiUrl}Customers/` + id, this.httpOptions)
    .pipe(
      retry(1),
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
