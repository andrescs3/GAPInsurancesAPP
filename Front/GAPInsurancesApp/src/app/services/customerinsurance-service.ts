import { Injector, OnInit } from '@angular/core';
import { CustomerInsuranceModel } from '../models/CustomerInsurance-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerInsuranceService {

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


  public getAll(): Observable<CustomerInsuranceModel[]> {
    return this.http.get<CustomerInsuranceModel[]>(`${this.apiUrl}CustomerInsurances`);
  }

  public getByCustomerID(customerid: number): Observable<CustomerInsuranceModel[]> {
    return this.http.get<CustomerInsuranceModel[]>(`${this.apiUrl}InsurancesByCustomer/?customerid=` + customerid);
  }

  getCustomerInsurance(id: number): Observable<CustomerInsuranceModel> {
    return this.http.get<CustomerInsuranceModel>(`${this.apiUrl}CustomerInsurances/` + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  createCustomerInsurance(CustomerInsurance: CustomerInsuranceModel): Observable<CustomerInsuranceModel> {
    return this.http.post<CustomerInsuranceModel>(`${this.apiUrl}CustomerInsurances/` , JSON.stringify(CustomerInsurance), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateCustomerInsurance(id: number, CustomerInsurance: CustomerInsuranceModel): Observable<CustomerInsuranceModel> {
    return this.http.put<CustomerInsuranceModel>(`${this.apiUrl}CustomerInsurances/` + id , JSON.stringify(CustomerInsurance), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  deleteCustomerInsurance(id: number) {
    return this.http.delete<CustomerInsuranceModel>(`${this.apiUrl}CustomerInsurances/` + id, this.httpOptions)
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
    return throwError(error.status);
 }

}
