import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerModel } from 'src/app/models/Customer-model';
import { CustomerService } from 'src/app/services/Customer-service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Customer-delete',
  templateUrl: './Customer-delete.component.html',
  styleUrls: ['./Customer-delete.component.sass']
})
export class CustomerDeleteComponent implements OnInit {

  Customer: CustomerModel;
  CustomerID: number;

  constructor(private route: ActivatedRoute, private router: Router, private api: CustomerService) {
    this.Customer = new CustomerModel();
    this.CustomerID = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.api.getCustomer(this.CustomerID).subscribe((data: CustomerModel) => {
      this.Customer = data;
    });
  }

  onClose() {
    this.router.navigate(['/customerlist']);
  }

  onDelete() {
    this.api.deleteCustomer(this.CustomerID).subscribe(data => {
      this.onClose();
    });
  }
}
