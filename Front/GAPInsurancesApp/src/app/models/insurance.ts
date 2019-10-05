import { InsuranceTypeEnum } from "../framework/enum/insurance-enum";
import { Type } from "@angular/compiler";

export class InsuranceModel{
    InsuranceID: number;
    Name: string;
    Description: string;
    Type: InsuranceTypeEnum;
    Coverage: number;

    InsuranceModel(){
        this.InsuranceID = -1;
        this.Name = "";
        this.Description = "";
        this.Type = InsuranceTypeEnum.None;
    }


}

