

export interface DoctorLookup {
key:string;
value:string;
}

export interface doctorSchduleSlots{
  day : number;
  utcHour :number;
}

export interface PatientLookup {
  key:string;
  value:string;
  }

  export interface DoctorListObj{
         id: string,
         doctorNameAr: string,
        doctorNameEn: string,
        doctorDescAr: string,
        doctorDescEn: string,
        appointmentCounts:number

  }

  export interface DoctorDetailsObj{
    doctorNameAr : string,
    doctorNameEn:string,
    doctorDescAr : string,
    doctorDescEn : string,
    schduleSlots:doctorSchduleSlots[],
    appointments :doctorappointmentObj[]
  }

  export interface doctorappointmentObj{
    titleAr : string,
    titleEn : string,
    patientName : string,
    appointmentDate : Date
  }
