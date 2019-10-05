import { Component, OnInit, Input } from '@angular/core';
import { InsuranceModel } from 'src/app/models/insurance';
import { Http } from '@angular/http';
import { InsuranceTypeEnum } from 'src/app/framework/enum/insurance-enum';
import { InsuranceService } from 'src/app/services/insurance-service';



@Component({
  selector: 'app-Insurance-list',
  templateUrl: './Insurance-list.component.html',
  styleUrls: ['./Insurance-list.component.sass']
})
export class InsuranceListComponent implements OnInit {

  Insurances: any = [];


  InsuranceTypeEnum = InsuranceTypeEnum;

  @Input() public Insurance: InsuranceModel;

  ngOnInit(): void {
     this.api.getAll().subscribe((data: {}) => {
      this.Insurances = data;
    });

  }

  constructor(private api: InsuranceService) {
  }



}
