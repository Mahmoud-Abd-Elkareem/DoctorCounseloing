import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorHomeComponent } from './Modules/Doctor/doctor-home/doctor-home.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxToastNotifyModule } from 'ngx-toast-notify';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    DoctorHomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    ReactiveFormsModule,
    NgxToastNotifyModule.forRoot({
			toastTimeoutInSeconds:  2,
			animationDelayInMilliSeconds:  500,
			enableClosebutton:  true,
			position:  'top-right',
			backgroundColor:  '',
			textColor:  ''
	}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
