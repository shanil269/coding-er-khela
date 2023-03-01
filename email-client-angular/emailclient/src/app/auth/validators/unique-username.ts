import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl } from "@angular/forms";
import { UsernameCheckService } from "../service/username-check.service";

@Injectable({ providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
    constructor(private usernameCheck: UsernameCheckService){}
    validate(control: AbstractControl): any {
        const { username } = control.value

        return this.usernameCheck.search(username).subscribe(result => {
            return result
        })
    }

}
