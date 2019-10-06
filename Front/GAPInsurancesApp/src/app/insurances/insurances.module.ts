import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceListComponent } from './components/insurance-list/insurance-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InsuranceEditComponent } from './components/insurance-edit/insurance-edit.component';
import { InsuranceDeleteComponent } from './components/insurance-delete/insurance-delete.component';



@NgModule({
  declarations:
  [
    InsuranceListComponent,
    InsuranceEditComponent,
    InsuranceDeleteComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class InsurancesModule { }
