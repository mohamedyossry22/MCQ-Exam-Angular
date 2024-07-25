import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  userData:any 
  email:any 
  constructor(private userService:AuthService) {
    this.userData = localStorage.getItem('token')
    this.email = localStorage.getItem('email')
    
  }

  intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    if (this.userData) {
      return next.handle(request.clone({
    
        headers: request.headers
          .set('Content-Type', `application/json`)
          .set('email', `${this.email}`)
          // .set('language', `en`)
          .set('Authorization', `Bearer ${this.userData}`)
      }));
    }
    return next.handle(request);
    
  }

}
