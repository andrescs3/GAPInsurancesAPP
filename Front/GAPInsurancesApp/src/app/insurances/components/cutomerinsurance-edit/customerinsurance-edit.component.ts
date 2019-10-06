import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CustomerInsuranceModel } from 'src/app/models/CustomerInsurance-model';
import { CustomerInsuranceService } from 'src/app/services/CustomerInsurance-service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/Customer-service';
import { InsuranceService } from 'src/app/services/insurance-service';



@Component({
  selector: 'app-CustomerInsurance-edit',
  templateUrl: './CustomerInsurance-edit.component.html',
  styleUrls: ['./CustomerInsurance-edit.component.sass']
})
export class CustomerInsuranceEditComponent implements OnInit {

  CustomerInsurance: CustomerInsuranceModel;


  CustomerInsuranceID: number;

  public frmCustomerInsurance: FormGroup;


  public GetFormDefinition() {

    return this.fb.group({
      CustomerInsuranceID: [''],
      CustomerCode: ['', Validators.required],
      InsuranceCode: ['', Validators.required],
      InitDate: ['', Validators.required],
      Price: ['', Validators.required],
      MonthsDuration: ['', Validators.required],
      RiskType: ['', Validators.required]
    });
  }

  constructor(private apiCustomerInsurance: CustomerInsuranceService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder, private apiCustomer: CustomerService, private apiInsurances: InsuranceService) {
    this.CustomerInsurance = new CustomerInsuranceModel();
    this.frmCustomerInsurance = this.GetFormDefinition();
    this.CustomerInsuranceID = +this.route.snapshot.paramMap.get('id');

  }
  get Price() { return this.frmCustomerInsurance.get('Price'); }

  ngOnInit() {
    if (this.CustomerInsuranceID > 0) {
      this.apiCustomerInsurance.getCustomerInsurance(this.CustomerInsuranceID).subscribe((data: CustomerInsuranceModel) => {
        this.CustomerInsurance = data;
        this.frmCustomerInsurance.patchValue({
          CustomerInsuranceID : data.CustomerInsuranceID,
          CustomerCode : data.CustomerCode,
          InsuranceCode : data.InsuranceCode,
          InitDate : data.InitDate,
          Price : data.Price,
          MonthsDuration : data.MonthsDuration,
          RiskType : data.RiskType
        });
      });
    }
  }

  redirect() {
    this.router.navigate(['/CustomerInsurancelist']);
  }

  onSave() {
    this.CustomerInsurance = new CustomerInsuranceModel(this.frmCustomerInsurance.value);
    if ( this.CustomerInsuranceID > 0) {
      this.apiCustomerInsurance.updateCustomerInsurance(this.CustomerInsuranceID, this.CustomerInsurance).subscribe(data => {
        this.redirect();
      });

    } else {
      this.apiCustomerInsurance.createCustomerInsurance(this.CustomerInsurance).subscribe(data => {
        this.redirect();
      });

    }
  }


}
