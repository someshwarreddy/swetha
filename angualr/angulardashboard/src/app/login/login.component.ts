import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  LoginService = inject(LoginService)
  router = inject(Router)
  fb = inject(FormBuilder);
  userForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)],],
  });
  onSubmit() {

    if (this.userForm.value) {
      const loginData = this.userForm.value
      this.LoginService.login(loginData).subscribe(
        {
          next: () => this.router.navigate(['/dashboard']),
          error: err => alert('Login failed')
        }
      )
    }
  }
  getErrors(field: string) {
    console.log('getErrors called for field:', field);
    return this.userForm.get(field)?.errors || null;
  }

  isTouchedInvalid(field: string): boolean {
    const control = this.userForm.get(field);
    return !!(control && control.touched && control.invalid);
  }
}
