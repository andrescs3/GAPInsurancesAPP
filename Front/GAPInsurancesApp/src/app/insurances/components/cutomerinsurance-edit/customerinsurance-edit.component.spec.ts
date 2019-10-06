import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInsuranceEditComponent } from './customerinsurance-edit.component';

describe('CustomerinsuranceEditComponent', () => {
  let component: CustomerInsuranceEditComponent;
  let fixture: ComponentFixture<CustomerInsuranceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
