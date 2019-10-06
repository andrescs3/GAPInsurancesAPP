import { Component, OnInit, Input } from '@angular/core';
import { CustomerModel } from 'src/app/models/Customer-model';
import { Http } from '@angular/http';

import { CustomerService } from 'src/app/services/Customer-service';



@Component({
  selector: 'app-Customer-list',
  templateUrl: './Customer-list.component.html',
  styleUrls: ['./Customer-list.component.sass']
})
export class CustomerListComponent implements OnInit {

  Customers: any = [];
  ngOnInit(): void {
     this.api.getAll().subscribe((data: {}) => {
      this.Customers = data;
    });

  }

  constructor(private api: CustomerService) {
  }



}
