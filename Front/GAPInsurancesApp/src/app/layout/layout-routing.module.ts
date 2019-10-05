import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutPageComponent} from './pages/layout-page.component';
import { InsuranceListComponent } from '../insurances/components/insurance-list/insurance-list.component';




const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [

            { path: 'insurancelist', component: InsuranceListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class LayoutRoutingModule {

}
