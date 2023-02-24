import { AbstractControl } from "@angular/forms";

export class MathValidators {
    static addition(target: string, sourceOne: string, secondSource: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target]
            const firstNumber = form.value[sourceOne]
            const secondNumber = form.value[secondSource]
            if ( firstNumber + secondNumber === parseInt(sum) ) {
                return null
            }
            return { Addition: true} 
        }
    }
}
