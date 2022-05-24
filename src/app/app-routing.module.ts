import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NewExamComponent } from './doctor/new-exam/new-exam.component';
import { StudentsComponent } from './doctor/students/students.component';
import { SubjectsComponent } from './doctor/subjects/subjects.component';
import { ExamComponent } from './student/exam/exam.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'exam' , component:ExamComponent},
  {path:'students' , component:StudentsComponent},
  {path:'subjects' , component:SubjectsComponent},
  {path:'new-exam' , component:NewExamComponent},
  {path:'**' , redirectTo:'exam' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
