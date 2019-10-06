import { RiskTypeEnum } from '../framework/enum/insurance-enum';
import { InsuranceModel } from './insurance-model';
import { CustomerModel } from './customer-model';

export class CustomerInsuranceModel {
    CustomerInsuranceID: number;
    CustomerCode: number;
    InsuranceCode: number;
    InitDate: Date;
    Price: number;
    MonthsDuration: number;
    RiskType: RiskTypeEnum;

    Customer: CustomerModel;
    Insurance: InsuranceModel;

    CustomerInsuranceModel() {
        this.CustomerInsuranceID = -1;
        this.CustomerCode = -1;
        this.InsuranceCode = -1;
        this.InitDate = new Date();
        this.Price = -1;
        this.MonthsDuration = -1;
        this.RiskType = RiskTypeEnum.None;
    }

    public constructor(init?: Partial<CustomerInsuranceModel>) {
        Object.assign(this, init);
    }
}

