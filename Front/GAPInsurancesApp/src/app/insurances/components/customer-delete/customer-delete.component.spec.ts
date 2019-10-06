import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeleteComponent } from './customer-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CustomerDeleteComponent', () => {
  let component: CustomerDeleteComponent;
  let fixture: ComponentFixture<CustomerDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
      RouterTestingModule,
      RouterModule,
    ],
      declarations: [ CustomerDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
