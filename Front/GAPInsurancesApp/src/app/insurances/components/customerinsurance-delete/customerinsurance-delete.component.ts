import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerInsuranceModel } from 'src/app/models/CustomerInsurance-model';
import { CustomerInsuranceService } from 'src/app/services/CustomerInsurance-service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-CustomerInsurance-delete',
  templateUrl: './CustomerInsurance-delete.component.html',
  styleUrls: ['./CustomerInsurance-delete.component.sass']
})
export class CustomerInsuranceDeleteComponent implements OnInit {

  CustomerInsurance: CustomerInsuranceModel;
  CustomerInsuranceID: number;

  constructor(private route: ActivatedRoute, private router: Router, private api: CustomerInsuranceService) {
    this.CustomerInsurance = new CustomerInsuranceModel();
    this.CustomerInsuranceID = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.api.getCustomerInsurance(this.CustomerInsuranceID).subscribe((data: CustomerInsuranceModel) => {
      this.CustomerInsurance = data;
    });
  }

  onClose() {
    this.router.navigate(['/CustomerInsurancelist']);
  }

  onDelete() {
    this.api.deleteCustomerInsurance(this.CustomerInsuranceID).subscribe(data => {
      this.onClose();
    });
  }
}
