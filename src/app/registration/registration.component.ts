import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationFormGroup: FormGroup

  constructor() {
    this.registrationFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required),
      aadharNumber: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('form = ', this.registrationFormGroup);
  }

}
