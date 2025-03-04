import { Injectable } from "@angular/core"
import { from, Observable } from "rxjs"
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http'

@Injectable()
export class AuthHttpIntercepter implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            withCredentials: true
        })
        return next.handle(modifiedReq)
    }
}
