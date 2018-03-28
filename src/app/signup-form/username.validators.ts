import { ValidationErrors, AbstractControl } from "@angular/forms";

export class UsernameValidators {
    
    // implementation of ValidatorFn interface
    static cannotContainSpace (control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        
            return null;
    }
}