import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import {ChartModule} from 'primeng/chart';
import {PaginatorModule} from 'primeng/paginator'
@NgModule({
  declarations: [
    DoctorDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ChartModule,
    PaginatorModule
  ]
})
export class DoctorModule { }
