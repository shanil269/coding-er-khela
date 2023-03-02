import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl } from "@angular/forms";
import { of } from "rxjs";
import { UsernameCheckService } from "../service/username-check.service";

@Injectable({ providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
    constructor(private usernameCheck: UsernameCheckService){}
    validate = (control: FormControl): any => {
        const username  = control.value
        return this.usernameCheck.search(username)
        // return of({ asd: true})
    }

}
