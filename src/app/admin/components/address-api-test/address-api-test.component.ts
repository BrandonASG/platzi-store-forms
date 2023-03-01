import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address-api-test',
  templateUrl: './address-api-test.component.html',
  styleUrls: ['./address-api-test.component.scss']
})
export class AddressApiTestComponent implements OnInit {

  form: FormGroup

  constructor(
    private _formBuilder: FormBuilder

  ) {
    this.form = this._formBuilder.group({
      street: ['', Validators.required],
      exterior: [null, Validators.required],
      interior: null,
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      municipality: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: [null, [
        Validators.required,
        
      ]],
      streets: this._formBuilder.group({
        firstStreet: '',
        secondStreet: ''
      })
    });
  }

  ngOnInit(): void {
  }

  //Funciones para obtener el valor de getName de forma sencilla
  // getNameValue () {
  //   console.log(this.nameField.value);
  // } 

  saveInfo() {
    if (this.form.valid){
      console.log(this.form.value)
    } else {
      this.form.markAllAsTouched();
    }
  }

  // //Manera abreviada de colocar una propiedad de un form group
  // get nameField () {
  //     return this.form.get('fullName.name')
  //   }
  // //Manera larga de extraer la propiedad de un form group
  // get lastnameField () {
  //   return this.form.get('fullName').get('lastname');
  // }
  
  // get isNameValid () {
  //   return this.nameField.touched && this.nameField.valid;
  // }

  // get isNameInvalid () {
  //   return this.nameField.touched && this.nameField.invalid;
  // }

  // get emailField () {
  //   return this.form.get('email');
  // }

  // get phoneField () {
  //   return this.form.get('phone');
  // }

  // get colorField () {
  //   return this.form.get('color');
  // }

  // get dateField () {
  //   return this.form.get('date');
  // }

  // get ageField () {
  //   return this.form.get('age');
  // }

  // get categoryField () {
  //   return this.form.get('category');
  // }

  // get tagField () {
  //   return this.form.get('tag');
  // }

  // get agreeField () {
  //   return this.form.get('agree');
  // }

  // get genderField () {
  //   return this.form.get('gender');
  // }

  // get zoneField () {
  //   return this.form.get('zone');
  // }

}
