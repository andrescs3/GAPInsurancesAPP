import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInsuranceEditComponent } from './customerinsurance-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

describe('CustomerInsuranceEditComponent', () => {
  let component: CustomerInsuranceEditComponent;
  let fixture: ComponentFixture<CustomerInsuranceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      declarations: [ CustomerInsuranceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInsuranceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
