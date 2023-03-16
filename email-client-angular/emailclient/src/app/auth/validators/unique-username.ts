import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl } from "@angular/forms";
import { catchError, map, of } from 'rxjs';
// import { UsernameCheckService } from "../service/username-check.service";
import { AuthService } from "../service/auth.service";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {

  constructor(private usernameCheck: AuthService) { }

  validate = (control: FormControl): any => {
    const username = control.value
    return this.usernameCheck.usernameAvailable(username).pipe(
      map(() => {
        return null
      }),
      catchError(err => {
        if (err.error.username) {
          return of({ noUniqueusername: true })
        }
        else {
          return of({ noConnection: true })
        }
      })
    )
  }

}
