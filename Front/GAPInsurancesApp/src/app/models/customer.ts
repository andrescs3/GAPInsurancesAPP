export class CustomerModel {
    CustomerID: number;
    FullName: string;
    Address: string;
    Phone: string;
    Identification: string;

    CustomerModel() {
        this.CustomerID = -1;
        this.FullName = '';
        this.Address = '';
        this.Phone = '';
        this.Identification = '';
    }
}
