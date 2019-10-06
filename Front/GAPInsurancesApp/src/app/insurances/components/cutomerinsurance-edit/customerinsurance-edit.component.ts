import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CustomerInsuranceModel } from 'src/app/models/CustomerInsurance-model';
import { CustomerInsuranceService } from 'src/app/services/CustomerInsurance-service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-CustomerInsurance-edit',
  templateUrl: './CustomerInsurance-edit.component.html',
  styleUrls: ['./CustomerInsurance-edit.component.sass']
})
export class CustomerInsuranceEditComponent implements OnInit {

  CustomerInsurance: CustomerInsuranceModel;

  

  CustomerInsuranceID: number;

  keys: any;
  
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

  constructor(private api: CustomerInsuranceService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.CustomerInsurance = new CustomerInsuranceModel();
    this.frmCustomerInsurance = this.GetFormDefinition();
    this.CustomerInsuranceID = +this.route.snapshot.paramMap.get('id');
    
  }
  get Name() { return this.frmCustomerInsurance.get('Name'); }

  ngOnInit() {
    if (this.CustomerInsuranceID > 0) {
      this.api.getCustomerInsurance(this.CustomerInsuranceID).subscribe((data: CustomerInsuranceModel) => {
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
      this.api.updateCustomerInsurance(this.CustomerInsuranceID, this.CustomerInsurance).subscribe(data => {
        this.redirect();
      });

    } else {
      this.api.createCustomerInsurance(this.CustomerInsurance).subscribe(data => {
        this.redirect();
      });

    }
  }


}
