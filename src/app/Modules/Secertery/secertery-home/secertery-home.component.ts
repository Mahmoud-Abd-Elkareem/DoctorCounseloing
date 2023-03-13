import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor.service';
import { appointmentListObj } from '../Models/shared-model';

@Component({
  selector: 'app-secertery-home',
  templateUrl: './secertery-home.component.html',
  styleUrls: ['./secertery-home.component.css']
})
export class SecerteryHomeComponent implements OnInit {

  appointmentList : appointmentListObj[] =[]
  ngOnInit(): void {
    this.getAppointmentList()
  }

constructor(public doctorService :DoctorService) {

}
  getAppointmentList(){
    debugger
      this.doctorService.AppointmentList$(9999,0).subscribe(
        res=>{
            res.data.items.forEach(
              app=>{
                this.appointmentList.push(app)
              }
            )
        }
      )
  }

}
