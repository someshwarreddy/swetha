import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefrms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactivefrms.component.html',
  styleUrl: './reactivefrms.component.scss'
})
export class ReactivefrmsComponent {
  // name = new FormControl('');
  // email = new FormControl('');
  // password = new FormControl('');
  // confirmPassword = new FormControl('');

  // frmctrl() {
  //   console.log('Form control initialized', {
  //     name: this.name.value,
  //     email: this.email.value,
  //     password: this.password.value,
  //     confirmPassword: this.confirmPassword.value
  //   });
  // }
  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)])
  });
  onSubmit() {
    console.log('Form submitted:', this.signupForm.value);
  }
  onReset() {
    this.signupForm.reset();
    console.log('Form reset');
    console.log('Form values after reset:', this.signupForm.value);
    console.log('Form valid:', this.signupForm.valid);
    console.log('Form pristine:', this.signupForm.pristine);
    console.log('Form dirty:', this.signupForm.dirty);
    console.log('Form touched:', this.signupForm.touched);
    console.log('Form untouched:', this.signupForm.untouched);
  }
}
