import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    DoctorDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ChartModule

  ]
})
export class DoctorModule { }
