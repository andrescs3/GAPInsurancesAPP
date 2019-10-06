import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerinsuranceDeleteComponent } from './customerinsurance-delete.component';

describe('CustomerinsuranceDeleteComponent', () => {
  let component: CustomerinsuranceDeleteComponent;
  let fixture: ComponentFixture<CustomerinsuranceDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerinsuranceDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerinsuranceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
