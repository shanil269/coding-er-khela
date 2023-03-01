import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameCheckService {

  constructor(private http: HttpClient) { }

  search(value: string) {
    return this.http.post<any>('https://api.angular-email.com/auth/username', {
      username: value
    }).pipe(
      map((value): any => {
        if(value.available) {
          return null
        }
      }),
      catchError(err => {
        if(err.message.username) {
          return of({ onUniqueusername: true })
        }
        else{
          return of({ noConnection: true })
        }
      })
    )
  }
}
