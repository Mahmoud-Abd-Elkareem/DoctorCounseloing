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
  appointmentPageIndex : number =0
  appointmentPageSize : number = 5
  appointmentTotalCount : number
  ngOnInit(): void {
    this.getAppointmentList(this.appointmentPageSize ,this.appointmentPageIndex)
  }

constructor(public doctorService :DoctorService) {

}
  getAppointmentList(pageSize :number , pageIndex : number ){
    debugger
      this.doctorService.AppointmentList$(pageSize,pageIndex).subscribe(
        res=>{
          this.appointmentTotalCount = res.data.totalCount
            res.data.items.forEach(
              app=>{
                this.appointmentList.push(app)
              }
            )
        }
      )
  }

  paginateAppointment(event :any){
    debugger
    this.appointmentList =[]
      this.appointmentPageIndex = event.page
      this.getAppointmentList(this.appointmentPageSize ,this.appointmentPageIndex)  }

}
