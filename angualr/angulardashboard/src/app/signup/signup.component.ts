import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailExistsValidator } from '../email-exists.validator';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  authService = inject(AuthserviceService);
  fb = inject(FormBuilder);
   userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email], emailExistsValidator()],
    password: ['', [Validators.required, Validators.minLength(6)], ],
    role: ['', Validators.required],
  });
successMessage: boolean = false;
onSubmit(){

  if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formData = this.userForm.value;
    this.authService.signup(formData).subscribe({
      next: (res) => {
         alert('User registered successfully');
        // console.log('User registered successfully:', res);
        this.successMessage = true;
        this.userForm.reset();
      },
      error: (err) => {
        if (err.status === 409) {
          this.userForm.get('email')?.setErrors({ emailExists: true });
        } else {
          alert('Registration failed. Try again later.');
        }
      }
    });

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
