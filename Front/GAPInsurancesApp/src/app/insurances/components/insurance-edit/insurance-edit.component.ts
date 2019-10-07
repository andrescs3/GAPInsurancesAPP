import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { InsuranceModel } from 'src/app/models/insurance-model';
import { InsuranceService } from 'src/app/services/insurance-service';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { InsuranceTypeEnum } from 'src/app/framework/enum/insurance-enum';


@Component({
  selector: 'app-Insurance-edit',
  templateUrl: './Insurance-edit.component.html',
  styleUrls: ['./Insurance-edit.component.sass']
})
export class InsuranceEditComponent implements OnInit {

  Insurance: InsuranceModel;

  

  InsuranceID: number;

  keys: any;

  InsuranceTypeEnum = InsuranceTypeEnum;

  public frmInsurance: FormGroup;


  public GetFormDefinition() {

    return this.fb.group({
      InsuranceID: [-1],
      Name: ['', Validators.required],
      Coverage: ['', Validators.required],
      Type: ['', Validators.required],
    });
  }

  constructor(private api: InsuranceService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.Insurance = new InsuranceModel();
    this.frmInsurance = this.GetFormDefinition();
    this.InsuranceID = +this.route.snapshot.paramMap.get('id');
    this.keys = Object.keys(this.InsuranceTypeEnum).filter(Number);
  }
  get Name() { return this.frmInsurance.get('Name'); }

  ngOnInit() {
    if (this.InsuranceID > 0) {
      this.api.getInsurance(this.InsuranceID).subscribe((data: InsuranceModel) => {
        this.Insurance = data;
        this.frmInsurance.patchValue({
          InsuranceID: data.InsuranceID,
          Name: data.Name,
          Coverage: data.Coverage,
          Type: data.Type
        });
      });
    }
  }

  redirect() {
    this.router.navigate(['/insurancelist']);
  }

  onSave() {
    this.Insurance = new InsuranceModel(this.frmInsurance.value);
    if ( this.InsuranceID > 0) {
      this.api.updateInsurance(this.InsuranceID, this.Insurance).subscribe(data => {
        this.redirect();
      });

    } else {
      this.api.createInsurance(this.Insurance).subscribe(data => {
        this.redirect();
      });
    }
  }

  onClose(){
    this.router.navigate(['/insurancelist']);
  }


}
