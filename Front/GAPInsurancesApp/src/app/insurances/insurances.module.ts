import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceListComponent } from './components/insurance-list/insurance-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InsuranceEditComponent } from './components/insurance-edit/insurance-edit.component';
import { InsuranceDeleteComponent } from './components/insurance-delete/insurance-delete.component';
import { CustomerInsuranceEditComponent } from './components/cutomerinsurance-edit/customerinsurance-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerInsuranceDeleteComponent } from './components/customerinsurance-delete/customerinsurance-delete.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations:
  [
    InsuranceEditComponent,
    InsuranceListComponent,
    InsuranceDeleteComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerInsuranceEditComponent,
    CustomerDeleteComponent,
    CustomerInsuranceDeleteComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDatepickerModule
  ]
})
export class InsurancesModule { }
