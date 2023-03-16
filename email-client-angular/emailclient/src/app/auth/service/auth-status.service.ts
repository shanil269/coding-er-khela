import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  constructor(private http: HttpClient) { }

  checkAuth() {
    return this.http.get('https://api.angular-email.com/auth/signedin').pipe(
      tap(response => {
        console.log(response)
      })
    )
  }
}
