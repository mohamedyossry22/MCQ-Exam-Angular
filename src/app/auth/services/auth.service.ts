import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  user = new Subject()
  createUser(model:any) {
    return this.http.post(environment.baseApi+'auth/create-user' , model)
  }

  login(model:any) {
    return this.http.post(environment.baseApi+'auth/login' , model)
  }

  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }

  getStudent(id:number) {
    return this.http.get(environment.baseApi+"students/"+id)
  }
  updateStudent(id:number , model:any) {
    return this.http.put(environment.baseApi+"students/"+id , model)
  }
  getUserData() {
    return this.http.get(environment.baseApi+'auth/getUserData')
  }
}
