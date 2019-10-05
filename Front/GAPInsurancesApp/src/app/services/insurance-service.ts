import { Injector, OnInit } from '@angular/core';
import { InsuranceModel } from '../models/Insurance';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  private apiUrl = 'http://localhost:60681/api/';

  constructor(
    private http: HttpClient
  ) {
  }

  public getAll(): Observable<InsuranceModel[]> {
    return this.http.get<InsuranceModel[]>(`${this.apiUrl}Insurances`);
  }



}
