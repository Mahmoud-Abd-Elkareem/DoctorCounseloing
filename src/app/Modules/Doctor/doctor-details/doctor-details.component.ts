import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { doctorappointmentObj, DoctorDetailsObj, doctorSchduleSlots } from '../Models/doctor-model';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.doctorId = params['id'];
   })
   this.getDoctorDetails()
  }

  day : number
  doctorId:string
  weekdays :string[]
  doctorDetails :DoctorDetailsObj
  today : Date = new Date()
  daysList : Date[] =[]
  todayapp :doctorappointmentObj[]
  slotCurrentItems: doctorSchduleSlots[]
  slotPageIndex : number =1
  slotPageSize : number = 5
  slotTotalCount : number
  appointmentCurrentItems: doctorappointmentObj[]
  appointmentPageIndex : number =1
  appointmentPageSize : number = 5
  appointmentTotalCount : number
  constructor(private route: ActivatedRoute ,public doctorService : DoctorService) {


  }

  getDoctorDetails(){
this.doctorService.DoctorsDetails$(this.doctorId).subscribe(
  res=>{
    if(res.succeeded){
      debugger
      this.doctorDetails = res.data
      this.todayapp = this.doctorDetails.appointments.filter(app=>new Date(app.appointmentDate).toDateString()  === this.today.toDateString() )
      this.slotTotalCount = this.doctorDetails.schduleSlots.length
      this.slotCurrentItems =this.doctorDetails.schduleSlots.slice((this.slotPageIndex - 1) * this.slotPageSize, this.slotPageIndex  * this.slotPageSize);
      this.appointmentCurrentItems =this.doctorDetails.appointments.slice((this.slotPageIndex - 1) * this.slotPageSize, this.slotPageIndex  * this.slotPageSize);

    }
  })
  }

  paginateSlot(event :any){
    debugger
      this.slotPageIndex = event.page +1
      this.slotCurrentItems =this.doctorDetails.schduleSlots.slice((this.slotPageIndex - 1) * this.slotPageSize, this.slotPageIndex  * this.slotPageSize);
  }

  paginateAppointment(event :any){
    debugger
      this.appointmentPageIndex = event.page +1
      this.appointmentCurrentItems =this.doctorDetails.appointments.slice((this.appointmentPageIndex - 1) * this.appointmentPageSize, this.appointmentPageIndex  * this.appointmentPageSize);
  }
}
