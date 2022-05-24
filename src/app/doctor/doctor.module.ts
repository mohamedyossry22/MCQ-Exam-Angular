import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewExamComponent } from './new-exam/new-exam.component';
import { SharedModule } from '../shared/shared.module';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';



@NgModule({
  declarations: [
    NewExamComponent,
    StudentsComponent,
    SubjectsComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class DoctorModule { }
