import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecerteryRoutingModule } from './secertery-routing.module';
import { SecerteryHomeComponent } from './secertery-home/secertery-home.component';
import { ReservationComponent } from './reservation/reservation.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SecerteryHomeComponent,
    ReservationComponent,
  ],
  imports: [
    CommonModule,
    SecerteryRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ]
})
export class SecerteryModule { }
