import { CustomerInsuranceModel } from './CustomerInsurance-model';

export class CustomerModel {
    CustomerID: number;
    FullName: string;
    Address: string;
    Phone: string;
    Identification: string;

    CustomerInsurances: CustomerInsuranceModel[];

    CustomerModel() {
        this.CustomerID = -1;
        this.FullName = '';
        this.Address = '';
        this.Phone = '';
        this.Identification = '';
        this.CustomerInsurances = [];
    }

    public constructor(init?: Partial<CustomerModel>) {
        Object.assign(this, init);
    }
}
