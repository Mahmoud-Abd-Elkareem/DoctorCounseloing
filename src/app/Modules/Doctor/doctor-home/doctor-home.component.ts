import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DoctorService } from 'src/app/Services/doctor.service';
import { DoctorListObj } from '../Models/doctor-model';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit{

  data: any;
  doctorsName : string[]=[]
  doctorsAppointment :number[]=[]
  chartOptions: any;

  subscription: Subscription;


  doctorList : DoctorListObj[] =[]
  ngOnInit(): void {
    this.getDoctorList()

  }
constructor(public doctorService : DoctorService) {

}

getDoctorList(){
  this.doctorService.DoctorsList$(999,0).subscribe(
    res=>{
      if(res.succeeded){
        res.data.items.forEach(
          doc=>{
              this.doctorList.push(doc)
              debugger
              if(doc.appointmentCounts != 0){
                this.doctorsName.push(doc.doctorNameAr)
                this.doctorsAppointment.push(doc.appointmentCounts)
              }
          }
        )

        this.data = {
          labels: this.doctorsName,
          datasets: [
              {
                  data:  this.doctorsAppointment,
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }
          ]
      };
      }
    }
  )
}
}
