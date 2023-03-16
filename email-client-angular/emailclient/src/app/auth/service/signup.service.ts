import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'

export interface SignupCredentials {
  username: string,
  password: string,
  passwordConfirmation: string
}
interface SignupResponse {
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signedin$ = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  createAccount(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>('https://api.angular-email.com/auth/signup', credentials, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.signedin$.next(true)
      }))
  }
}
