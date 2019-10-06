import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutPageComponent} from './pages/layout-page.component';
import { InsuranceListComponent } from '../insurances/components/insurance-list/insurance-list.component';
import { InsuranceEditComponent } from '../insurances/components/insurance-edit/insurance-edit.component';
import { InsuranceDeleteComponent } from '../insurances/components/insurance-delete/insurance-delete.component';
import { CustomerEditComponent } from '../insurances/components/customer-edit/customer-edit.component';
import { CustomerInsuranceEditComponent } from '../insurances/components/cutomerinsurance-edit/customerinsurance-edit.component';
import { CustomerListComponent } from '../insurances/components/customer-list/customer-list.component';
import { CustomerDeleteComponent } from '../insurances/components/customer-delete/customer-delete.component';
import { CustomerInsuranceDeleteComponent } from '../insurances/components/customerinsurance-delete/customerinsurance-delete.component';




const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'insurancelist', component: InsuranceListComponent },
            { path: 'insuranceedit', component: InsuranceEditComponent },
            { path: 'insuranceedit/:id', component: InsuranceEditComponent },
            { path: 'insurancedelete/:id', component: InsuranceDeleteComponent },
            { path: 'customerlist', component: CustomerListComponent },
            { path: 'customeredit/:id', component: CustomerEditComponent },
            { path: 'customeredit', component: CustomerEditComponent },
            { path: 'customerdelete/:id', component: CustomerDeleteComponent },
            { path: 'customerinsuranceedit', component: CustomerInsuranceEditComponent },
            { path: 'customerinsuranceedit/:id', component: CustomerInsuranceEditComponent },
            { path: 'customerinsurancedelete/:id', component: CustomerInsuranceDeleteComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class LayoutRoutingModule {

}
