import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorHomeComponent,
  },
  {
    path: 'Details/:id',
    component: DoctorDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
