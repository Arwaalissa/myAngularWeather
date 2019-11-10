import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap , catchError } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  private handleError(res: HttpErrorResponse){
    console.log(res);
    return throwError(res.error || 'Server error');
  }
}
