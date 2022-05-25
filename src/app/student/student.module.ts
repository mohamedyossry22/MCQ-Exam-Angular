import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './components/exam/exam.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ExamComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class StudentModule { }
