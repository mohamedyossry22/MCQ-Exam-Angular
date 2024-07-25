import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm!:FormGroup;
  students:any[]= []
  constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router , private toaster:ToastrService) { }
  ngOnInit(): void {
    this.createForm()
  }
  getType(event:any) {
    if(event.value !== 'PROF') {
      this.userForm.get('code')?.setErrors(null);
      this.userForm.updateValueAndValidity();
    }else {
      this.userForm.get('code')?.removeValidators(Validators.required);
      this.userForm.updateValueAndValidity();
    }
    console.log(this.userForm.controls);
    
  }
  createForm() {
    this.userForm = this.fb.group({
      username:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
      confirmPassword:['' , [Validators.required]],
      type:['STUDENT' , [Validators.required]],
      code:['' , [Validators.required , Validators.minLength(4) , Validators.maxLength(4)]],
    })
  }



  submit() {
    const model = this.userForm.value;
    delete model.confirmPassword;
    model.code = model.code.toString()
      this.service.createUser(model).subscribe((res:any) => {
        this.toaster.success("تم انشاء الحساب بنجاح" , "" , {
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        })
        this.service.user.next(res)
        localStorage.setItem("token" , res.token)
        localStorage.setItem("email" , res.email)
        this.router.navigate(['/subjects'])
      })

  }
}
