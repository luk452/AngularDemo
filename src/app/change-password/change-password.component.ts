import { PasswordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  submit() {
    console.log('change password submit');
    console.log(this.oldPassword);
  }

}
