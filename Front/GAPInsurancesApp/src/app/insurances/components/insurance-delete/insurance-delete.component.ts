import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InsuranceModel } from 'src/app/models/insurance-model';
import { InsuranceService } from 'src/app/services/insurance-service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { InsurancesModule } from '../../insurances.module';

@Component({
  selector: 'app-Insurance-delete',
  templateUrl: './Insurance-delete.component.html',
  styleUrls: ['./Insurance-delete.component.sass']
})
export class InsuranceDeleteComponent implements OnInit {

  Insurance: InsuranceModel;
  InsuranceID: number;

  constructor(private route: ActivatedRoute, private router: Router, private api: InsuranceService) {
    this.Insurance = new InsuranceModel();
    this.InsuranceID = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.api.getInsurance(this.InsuranceID).subscribe((data: InsuranceModel) => {
      this.Insurance = data;
    });
  }

  onClose() {
    this.router.navigate(['/insurancelist']);
  }

  onDelete() {
    this.api.deleteInsurance(this.InsuranceID).subscribe(data => {
      this.onClose();
    });
  }
}
