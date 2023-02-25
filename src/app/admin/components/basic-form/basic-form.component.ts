import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  //Creación y declaración de puros controls sin grupo
  numberField = new FormControl ('Control de Number');
  passField = new FormControl ('Control de Password');
  radioField = new FormControl ('Control de radio');
  checkField = new FormControl ('Control de check box');
  buttonField = new FormControl ('Control de button');
  fileField = new FormControl ('Control de files');
  monthField = new FormControl ('Control de month');
  rangeField = new FormControl ('Control de range');
  weekField = new FormControl ('Control de week');
  dtimeField = new FormControl ('Control de date time local');
  searchField = new FormControl ('Control de search');

  form: FormGroup
  
  constructor(
    private _formBuilder: FormBuilder 
  ) { 
    this.buildForm();
   }

  ngOnInit(): void {

    //Obtener mensaje de manera reactiva e imprimirlo en HTML en tiempo real (SOLO EL NAME)
    // this.nameField.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // })

    //Obtener mensaje de manera reactiva e imprimirlo en HTML en tiempo real (TODO EL FORM)
    // this.form.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // })
  }

  //Contruye el formulario usando el FormBuilder declarado en el constructor
  private buildForm(){
    this.form = this._formBuilder.group ({
      fullName: this._formBuilder.group ({
        name: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]],
        lastname: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]]
      }),        
      email: ['',[Validators.required, Validators.email]],
      phone: ['',Validators.required],
      color: ['#000000'],
      date: [''],
      age: [18,[Validators.required, Validators.min(18),Validators.max(100)]],

      category: [''],
      tag: [''],

      agree: [false,[Validators.requiredTrue]],
      gender: [''],
      zone: ['']
  });
}
//Funciones para obtener el valor de getName de forma sencilla
  getNameValue () {
    console.log(this.nameField.value);
  } 

  saveInfo() {
    if (this.form.valid){
      console.log(this.form.value)
    } else {
      this.form.markAllAsTouched();
    }
  }

  get nameField () {
      return this.form.get('fullName.name')
    }
    
  get lastnameField () {
    return this.form.get('fullName').get('lastname');
  }
  
  get isNameValid () {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameInvalid () {
    return this.nameField.touched && this.nameField.invalid;
  }

  get emailField () {
    return this.form.get('email');
  }

  get phoneField () {
    return this.form.get('phone');
  }

  get colorField () {
    return this.form.get('color');
  }

  get dateField () {
    return this.form.get('date');
  }

  get ageField () {
    return this.form.get('age');
  }

  get categoryField () {
    return this.form.get('category');
  }

  get tagField () {
    return this.form.get('tag');
  }

  get agreeField () {
    return this.form.get('agree');
  }

  get genderField () {
    return this.form.get('gender');
  }

  get zoneField () {
    return this.form.get('zone');
  }

}
