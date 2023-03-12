import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path: "Secertery",
      loadChildren: () => import('./Modules/Secertery/secertery.module').then(m => m.SecerteryModule),
    },
    {
      path: "Doctor",
      loadChildren: () => import('./Modules/Doctor/doctor.module').then(m => m.DoctorModule),

    },
    {
      path:'',
      component:HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
