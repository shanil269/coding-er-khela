import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  createAccount(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>('https://api.angular-email.com/auth/signup', credentials)
  }
}
