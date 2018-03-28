import { ValidationErrors, AbstractControl } from "@angular/forms";
import { promise } from "protractor";

export class UsernameValidators {
    
    // implementation of ValidatorFn interface
    static cannotContainSpace (control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        
            return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        // simulate call to the server
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "luk452")
                    resolve({ shouldBeUnique: true });
                else 
                    resolve(null);
            }, 2000);
        })
    }
}