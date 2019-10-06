import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutPageComponent} from './pages/layout-page.component';
import { InsuranceListComponent } from '../insurances/components/insurance-list/insurance-list.component';
import { InsuranceEditComponent } from '../insurances/components/insurance-edit/insurance-edit.component';
import { InsuranceDeleteComponent } from '../insurances/components/insurance-delete/insurance-delete.component';




const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: 'insurancelist', component: InsuranceListComponent },
            { path: 'insuranceedit', component: InsuranceEditComponent },
            { path: 'insuranceedit/:id', component: InsuranceEditComponent },
            { path: 'insurancedelete/:id', component: InsuranceDeleteComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class LayoutRoutingModule {

}
