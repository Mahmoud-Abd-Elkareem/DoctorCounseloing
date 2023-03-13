import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { doctorappointmentObj, DoctorDetailsObj } from '../Models/doctor-model';

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
  constructor(private route: ActivatedRoute ,public doctorService : DoctorService) {


  }

  getDoctorDetails(){
debugger
this.doctorService.DoctorsDetails$(this.doctorId).subscribe(
  res=>{
    if(res.succeeded){
      this.doctorDetails = res.data
      this.todayapp = this.doctorDetails.appointments.filter(app=>new Date(app.appointmentDate).toDateString()  === this.today.toDateString() )
      console.log(this.todayapp);

    }
  })
  }

}
