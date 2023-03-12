import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { SecerteryHomeComponent } from './secertery-home/secertery-home.component';

const routes: Routes = [
  {
    path: '',
    component: SecerteryHomeComponent,
  },
  {
    path: 'Reservation',
    component: ReservationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecerteryRoutingModule { }
