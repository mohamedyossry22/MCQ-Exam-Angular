// import { Injectable } from '@angular/core';
// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { ErrorService } from '../services/error.service';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

//   constructor(
//     protected errorService: ErrorService
//   ) {
//   }

//   intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
//     return next.handle(req).pipe(
//       catchError((error: HttpErrorResponse) => {
//         console.log(this.errorService);
//         if (error.status === 404) {
//           this.errorService.handleError(error);
//         }
//         return throwError(error);
//       })
//     );
//   }


// }
