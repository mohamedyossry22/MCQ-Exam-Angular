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
  type:string = "STUDENT"
  constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router , private toaster:ToastrService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      type:[this.type],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
      code:['' , [Validators.required]],
    })
  }

  getType(event:any) {
    if(event.value == 'PROF') {
      this.loginForm.get('code')?.setErrors(null);
      this.loginForm.updateValueAndValidity();
    }else {
      this.loginForm.get('code')?.removeValidators(Validators.required);
      this.loginForm.updateValueAndValidity();
    }
    console.log(this.loginForm.controls);
    
  }

  submit() {
      const model = this.loginForm.value;
      model.code = model.code.toString()
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
