import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  users:any[]= [];
  type:string = "students"
  constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router , private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      type:[this.type],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
    })
  }

  getRole(event:any) {
    this.type = event.value
    this.getUsers()
  }
  getUsers() {
    this.service.getUsers(this.type).subscribe((res:any) => {
      this.users = res
    })
  }

  submit() {
   

    let index = this.users.findIndex(item => item.email == this.loginForm.value.email && item.password == this.loginForm.value.password  )
    if(index == -1) {
      this.toaster.error("الايميل او كلمة المرور غير صحيحة" , "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }else {
      const model = {
        username:this.users[index].username,
        role:this.type,
        userId:this.users[index].id
      }
      this.service.login(model).subscribe(res => {
        this.service.user.next(res)
        this.toaster.success("تم تسجيل الدخول بنجاح" , "" , {
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        })
        this.router.navigate(['/subjects'])
      })
    }

  }

}
