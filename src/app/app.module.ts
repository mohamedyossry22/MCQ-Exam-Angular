import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    DoctorModule,
    SharedModule,
    StudentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
