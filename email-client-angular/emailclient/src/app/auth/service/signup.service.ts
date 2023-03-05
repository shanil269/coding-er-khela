import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  createAccount(credentials: any) {
    return this.http.post<any>('https://api.angular-email.com/auth/signup', credentials)
  }
}
