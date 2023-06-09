import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxToastNotifyService } from 'ngx-toast-notify';
import { catchError } from 'rxjs';
import { AppRestResponse, PagedItems } from '../Models/shared-model';
import { DoctorDetailsObj, DoctorListObj, DoctorLookup, doctorSchduleSlots } from '../Modules/Doctor/Models/doctor-model';
import { appointmentListObj, appointmentObj } from '../Modules/Secertery/Models/shared-model';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends BaseServiceService{

  constructor(public http: HttpClient ,public override toastr: NgxToastNotifyService) {
    super(toastr)
}
DoctorLookup$ = () => {
  let noteURL = `https://localhost:7288/api/v1/Doctor/lookup`
  return this.http.get<AppRestResponse<DoctorLookup[]>>(noteURL).pipe(
    catchError((err) => this.handleError(err))

  )}

  DoctorSchduleSlots$ = (doctorId: string) => {
    let noteURL = `https://localhost:7288/api/v1/SchduleSlot?doctorId=`+doctorId+`&pageIndex=0&pageSize=99999`
    return this.http.get<AppRestResponse<PagedItems<doctorSchduleSlots>>>(noteURL).pipe(
      catchError((err) => this.handleError(err))

    )}

  AddAppointment$ =(appointment :appointmentObj) =>{
    let noteURL = `https://localhost:7288/api/v1/Appointment`
    return this.http.post<AppRestResponse<appointmentObj>>(noteURL ,appointment).pipe(
      catchError((err) => this.handleError(err)))

  }

  AppointmentList$ =(pageSize :number , pageIndex : number) =>{
    let noteURL = `https://localhost:7288/api/v1/Appointment?pageIndex=${pageIndex}&pageSize=${pageSize}`
    return this.http.get<AppRestResponse<PagedItems<appointmentListObj>>>(noteURL).pipe(
      catchError((err) => this.handleError(err)))

  }
  DoctorsList$ =(pageSize :number , pageIndex : number) =>{
    let noteURL = `https://localhost:7288/api/v1/Doctor?pageIndex=${pageIndex}&pageSize=${pageSize}`
    return this.http.get<AppRestResponse<PagedItems<DoctorListObj>>>(noteURL).pipe(
      catchError((err) => this.handleError(err)))

  }

  DoctorsDetails$ =(id : string) =>{
    let noteURL = `https://localhost:7288/api/v1/Doctor/DoctorDetails?doctorId=${id}`
    return this.http.get<AppRestResponse<DoctorDetailsObj>>(noteURL).pipe(
      catchError((err) => this.handleError(err)))

  }

}
