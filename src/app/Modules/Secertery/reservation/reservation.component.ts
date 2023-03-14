import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxToastNotifyService } from 'ngx-toast-notify';
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
  NotAvailable:boolean = false
  doctorid : string =""
  doctorname? : string =""
  doctorSchduleSlots : doctorSchduleSlots[] =[]
  constructor(public  doctorservice:DoctorService ,public patientservice:PatientService ,public route : Router,public toastr: NgxToastNotifyService) {

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
      appointmentdate : new FormControl({value:"" , disabled:true},[Validators.required]),
      appointmenttime: new FormControl({value:"" , disabled:true},[Validators.required])
    })
  }

  getPatientLookUp(){
    this.patientservice.PatientLookup$().subscribe(
      res=>{
        if(res.succeeded){

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

  getDoctorId(id : string){
    debugger
    this.doctorid = id
    this.doctorname = this.doctorlookup.find(doc=>doc.key ==id)?.value
    if(id != ""){
      this.AppointmentForm.controls['appointmentdate'].enable();
    }else{
      this.AppointmentForm.controls['appointmenttime'].disable();
      this.AppointmentForm.controls['appointmentdate'].disable();

    }
  }

  gettimeperday(day:any){
    if(!day) {
      return
    }
    this.AppointmentForm.controls['appointmenttime'].enable();
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
      debugger
      if(this.doctorSchduleSlots.length !=0)
      {
        this.NotAvailable = false
        this.AppointmentForm.controls['appointmenttime'].enable();
      }else{
        this.NotAvailable = true
        this.AppointmentForm.controls['appointmenttime'].disable();
      }
    }
  }
)
  }

  AddReservation(){
debugger
    var appointmentdateTime = new Date(this.AppointmentForm.value.appointmentdate);
    appointmentdateTime.setUTCHours(this.AppointmentForm.value.appointmenttime)
    appointmentdateTime.setMinutes(0);
    appointmentdateTime.setSeconds(0);
    this.appointmentObj ={
      titleAr :this.AppointmentForm.value.titleAr,
      titleEn:this.AppointmentForm.value.titleEn,
      doctorId:this.AppointmentForm.value.doctorId,
      patientId:this.AppointmentForm.value.patientId,
      appointmentdate:new Date(appointmentdateTime)
    }
    this.doctorservice.AddAppointment$(this.appointmentObj).subscribe(
      res=>{
        if(res.succeeded){
          this.toastr.showToast('Reserved Successfully', 'success', 'top-center');
          this.route.navigateByUrl(`Secertery`)
        }else{
          let message = res.errors[0]
          this.toastr.showToast(message, 'error', 'top-center');

        }
      }

    )
  }
}
