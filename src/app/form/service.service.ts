import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public nombre : string = '([a-zA-Z]+)';
  public email : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public nombreUsuario:string = '/^[a-zA-Z0-9\_\-]{4,16}$/';
  

  constructor() { }

  passwords(password1:string, password2:string){
    return (formGroup:AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(password1)?.value;
      const pass2 = formGroup.get(password2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(password2)?.setErrors({noIguales:true})
        return {
          noIguales: true
        }
      }

      formGroup.get(password2)?.setErrors({noIguales: true});
      return null;
    }
  }
}
