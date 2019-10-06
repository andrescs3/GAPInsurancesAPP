import { InsuranceTypeEnum } from '../framework/enum/insurance-enum';


export class InsuranceModel {
    InsuranceID: number;
    Name: string;
    Description: string;
    Type: InsuranceTypeEnum;
    Coverage: number;

    InsuranceModel() {
        this.InsuranceID = -1;
        this.Name = '';
        this.Description = '';
        this.Type = InsuranceTypeEnum.None;
    }

    public constructor(init?: Partial<InsuranceModel>){
        Object.assign(this, init);
    }


}

