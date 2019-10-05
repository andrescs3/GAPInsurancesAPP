import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LayoutPageComponent } from './pages/layout-page.component';
import { LayoutRoutingModule } from './layout-routing.module';
import {InsurancesModule} from '../insurances/insurances.module';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LayoutPageComponent],
  imports: [
    LayoutRoutingModule,
    InsurancesModule,
    RouterModule,
  ],
})
export class LayoutModule { }
