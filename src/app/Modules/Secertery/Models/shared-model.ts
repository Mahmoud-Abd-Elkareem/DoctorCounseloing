export interface AppRestResponse<T> {
  data: T;
  succeeded: boolean;
  errors?: any;
}

export interface PagedItems<T> {
  items: T[],
  pageIndex: number,
  totalPages: number,
  totalCount: number,
  hasPreviousPage: boolean,
  hasNextPage: boolean,
}

export interface appointmentObj{
  titleAr: string,
  titleEn: string,
  appointmentdate: Date,
  patientId: string,
  doctorId: string
}
