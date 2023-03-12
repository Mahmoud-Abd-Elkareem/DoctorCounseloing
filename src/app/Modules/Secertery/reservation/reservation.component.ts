import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/Services/doctor.service';
import { PatientService } from 'src/app/Services/patient.service';
import { DoctorLookup, doctorSchduleSlots, PatientLookup } from '../../Doctor/Models/doctor-model';
import { appointmentObj } from '../Models/shared-model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  AppointmentForm:FormGroup =new FormGroup({});
  doctorlookup : DoctorLookup[] = []
  patientlookup : PatientLookup[] = []
  appointmentObj : appointmentObj = {
    titleAr:"",
    titleEn:"",
    doctorId:"",
    patientId:"",
    appointmentdate:new Date()
  }
  doctorid : string =""
  doctorSchduleSlots : doctorSchduleSlots[] =[]
  constructor(public  doctorservice:DoctorService ,public patientservice:PatientService) {

  }
  ngOnInit(): void {
  this.intiateAppointmentForm();
  this.getDoctorLookUp();
  this.getPatientLookUp()
  }
  intiateAppointmentForm(){
    this.AppointmentForm = new FormGroup({
      titleAr : new FormControl(this.appointmentObj.titleAr, [Validators.required]),
      titleEn : new FormControl(this.appointmentObj.titleEn, [Validators.required]),
      doctorId : new FormControl(this.appointmentObj.doctorId, [Validators.required]),
      patientId : new FormControl(this.appointmentObj.patientId, [Validators.required]),
      appointmentdate : new FormControl(this.appointmentObj.appointmentdate, [Validators.required])
    })
  }

  getPatientLookUp(){
    this.patientservice.PatientLookup$().subscribe(
      res=>{
        if(res.succeeded){
          debugger
          res.data.forEach(
            doc =>{
              this.patientlookup.push(doc)
            }
          )
         }
      }
      )
  }
  getDoctorLookUp(){
    this.doctorservice.DoctorLookup$().subscribe(
      res=>{
        if(res.succeeded){
          debugger
          res.data.forEach(
            doc =>{
              this.doctorlookup.push(doc)
            }
          )
         }
      }
      )
  }
  today : Date = new Date()

  getslots(id : string){
    this.doctorid = id
  }

  gettimeperday(day:Date){
    debugger
    this.doctorSchduleSlots = []
  this.doctorservice.DoctorSchduleSlots$(this.doctorid).subscribe(
  res=>{
    if(res.succeeded){
      res.data.items.forEach(
        slot=>{
          this.doctorSchduleSlots.push(slot)
        }
      )
      var dayinmonth = day.getDay()
      this.doctorSchduleSlots = this.doctorSchduleSlots.filter(slot=>slot.day == dayinmonth)
    }
  }
)
  }

  AddReservation(){
    this.appointmentObj ={
      titleAr :this.AppointmentForm.value.titleAr,
      titleEn:this.AppointmentForm.value.titleEn,
      doctorId:this.AppointmentForm.value.doctorId,
      patientId:this.AppointmentForm.value.patientId,
      appointmentdate:this.AppointmentForm.value.appointmentdate
    }
    this.doctorservice.AddAppointment$(this.appointmentObj).subscribe(
      res=>{
        if(res.succeeded){

        }
      }

    )
  }
}
