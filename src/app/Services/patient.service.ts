import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxToastNotifyService } from 'ngx-toast-notify';
import { catchError } from 'rxjs';
import { AppRestResponse, PagedItems } from '../Models/shared-model';
import { DoctorLookup, doctorSchduleSlots, PatientLookup } from '../Modules/Doctor/Models/doctor-model';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseServiceService{

  constructor(public http: HttpClient ,public override toastr: NgxToastNotifyService) {
    super(toastr)
}
PatientLookup$ = () => {
  let noteURL = `https://localhost:7288/api/v1/Patient/lookup`
  return this.http.get<AppRestResponse<PatientLookup[]>>(noteURL).pipe(
    catchError((err) => this.handleError(err))

  )}
}
