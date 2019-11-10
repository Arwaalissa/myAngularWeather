import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap , catchError } from 'rxjs/operators';
import { Observable , throwError } from 'rxjs';
import { User } from '../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user$: Observable<User | null>
  constructor(private http: HttpClient,
    public afAuth: AngularFireAuth, private snackBar: MatSnackBar,
    private router: Router) { 
      this.user$ = this.afAuth.authState;
    }

    logout(){
      //return promisw
      this.afAuth.auth.signOut().then(() => {
this.snackBar.open(`You've Signed Out`, `OK`, {
duration: 5000
      });
      this.router.navigate(['/weather']);
    });
    }
  private handleError(res: HttpErrorResponse){
    console.log(res);
    return throwError(res.error || 'Server error');
  }
}
