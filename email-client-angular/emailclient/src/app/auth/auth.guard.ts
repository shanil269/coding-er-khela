import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { map, Observable, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.signedin$.pipe(
      skipWhile((value) => value === null),
      map((value) => value!),
      take(1),
      tap(authenticated => {
        if (!authenticated) {
          return this.router.navigateByUrl('/')
        }
        else {
          return
        }
      })
    )
  }
}
