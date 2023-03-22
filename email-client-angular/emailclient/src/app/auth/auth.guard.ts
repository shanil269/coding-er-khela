import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, skipWhile, take } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.signedin$.pipe(
      skipWhile((value) => value === null),
      map((value) => value!),
      take(1)
    )
  }
}
