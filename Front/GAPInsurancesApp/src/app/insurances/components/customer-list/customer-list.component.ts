import { Component, OnInit, Input } from '@angular/core';
import { CustomerModel } from 'src/app/models/Customer-model';
import { Http } from '@angular/http';

import { CustomerService } from 'src/app/services/Customer-service';
import { CustomerInsuranceService } from 'src/app/services/CustomerInsurance-service';
import { RiskTypeEnum } from 'src/app/framework/enum/insurance-enum';



@Component({
  selector: 'app-Customer-list',
  templateUrl: './Customer-list.component.html',
  styleUrls: ['./Customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  Customers: any = [];
  RiskTypeEnum = RiskTypeEnum;
  ngOnInit(): void {
     this.apiCustomer.getAll().subscribe((data: {}) => {
      this.Customers = data;
      this.Customers.forEach(element => {
        this.apiCustomerInsurances.getByCustomerID(element.CustomerID).subscribe((dataCustomer: {}) => {
          element.CustomerInsurances = dataCustomer;
        });
      });
    });

  }

  constructor(private apiCustomer: CustomerService, private apiCustomerInsurances: CustomerInsuranceService) {
  }



}
