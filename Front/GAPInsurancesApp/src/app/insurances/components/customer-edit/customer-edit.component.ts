import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CustomerModel } from 'src/app/models/Customer-model';
import { CustomerService } from 'src/app/services/Customer-service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-Customer-edit',
  templateUrl: './Customer-edit.component.html',
  styleUrls: ['./Customer-edit.component.sass']
})
export class CustomerEditComponent implements OnInit {

  Customer: CustomerModel;

  

  CustomerID: number;

  keys: any;

  public frmCustomer: FormGroup;


  public GetFormDefinition() {

    return this.fb.group({
      CustomerID: [-1],
      FullName: ['', Validators.required],
      Address: ['', Validators.required],
      Phone: ['', Validators.required],
      Identification: ['', Validators.required]
    });
  }

  constructor(private api: CustomerService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.Customer = new CustomerModel();
    this.frmCustomer = this.GetFormDefinition();
    this.CustomerID = +this.route.snapshot.paramMap.get('id');

  }
  get FullName() { return this.frmCustomer.get('FullName'); }
  get Identification() { return this.frmCustomer.get('Identification'); }
  get Address() { return this.frmCustomer.get('Address'); }
  get Phone() { return this.frmCustomer.get('Phone'); }

  ngOnInit() {
    if (this.CustomerID > 0) {
      this.api.getCustomer(this.CustomerID).subscribe((data: CustomerModel) => {
        this.Customer = data;
        this.frmCustomer.patchValue({
          CustomerID: data.CustomerID,
          FullName: data.FullName,
          Address: data.Address,
          Phone: data.Phone,
          Identification: data.Identification
        });
      });
    }
  }

  redirect() {
    this.router.navigate(['/customerlist']);
  }

  onSave() {
    this.Customer = new CustomerModel(this.frmCustomer.value);
    if ( this.CustomerID > 0) {
      this.api.updateCustomer(this.CustomerID, this.Customer).subscribe(data => {
        this.redirect();
      });

    } else {
      this.api.createCustomer(this.Customer).subscribe(data => {
        this.redirect();
      });

    }
  }

  onClose(){
    this.router.navigate(['/customerlist']);
  }


}
