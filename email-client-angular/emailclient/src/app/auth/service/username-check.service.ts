import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsernameCheckService {

  constructor(private http: HttpClient) {
  }

  search(username: string) {
    return this.http.post<any>('https://api.angular-email.com/auth/username', {
      username: username
    })
  }
}
