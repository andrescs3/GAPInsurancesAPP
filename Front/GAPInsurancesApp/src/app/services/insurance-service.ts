import { Injector, OnInit } from '@angular/core';
import { InsuranceModel } from '../models/insurance-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

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


  public getAll(): Observable<InsuranceModel[]> {
    return this.http.get<InsuranceModel[]>(`${this.apiUrl}Insurances`);
  }

  getInsurance(id: number): Observable<InsuranceModel> {
    return this.http.get<InsuranceModel>(`${this.apiUrl}Insurances/` + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  createInsurance(insurance: InsuranceModel): Observable<InsuranceModel> {
    return this.http.post<InsuranceModel>(`${this.apiUrl}Insurances` , JSON.stringify(insurance), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateInsurance(id: number, insurance: InsuranceModel): Observable<InsuranceModel> {
    return this.http.post<InsuranceModel>(`${this.apiUrl}Insurances/`, JSON.stringify(insurance), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  deleteInsurance(id: number) {
    return this.http.delete<InsuranceModel>(`${this.apiUrl}Insurances/` + id, this.httpOptions)
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
