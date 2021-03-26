import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  form: FormGroup = this.fBuilder.group({
    nombre         :  ['', [ Validators.required, Validators.pattern(this.validaciones.nombre)] ],
    nombreUsuario  :  ['', [ Validators.required, Validators.pattern(this.validaciones.nombreUsuario)] ],
    email          :  ['', [ Validators.required, Validators.pattern(this.validaciones.email)] ],
    password       :  ['', [ Validators.required, Validators.minLength(5)] ],
    password2      :  ['', [ Validators.required] ]
    
  });
  constructor(
    private fBuilder: FormBuilder,
    private validaciones: ServiceService
  ) {}

  ngOnInit(): void {
    console.log(this.form.controls?.value);
  }

  camboValidado(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  submit() {
    this.form.markAllAsTouched();
  }

}
