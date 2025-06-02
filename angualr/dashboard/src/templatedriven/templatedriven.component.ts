import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.scss'
})
export class TemplatedrivenComponent {
ngForm: any;

onSubmit(ngForm: any) {
  console.log('Form submitted:', ngForm.value);
  // You can add further processing here, like sending the form data to a server
  // this.ngForm.reset(); // Reset the form after submission
  // console.log('Form reset');
  // console.log('Form values after reset:', ngForm.value);
  console.log('Form valid:', ngForm.valid);  
  console.log('Form pristine:', ngForm.pristine);
  console.log('Form dirty:', ngForm.dirty);  
  console.log('Form touched:', ngForm.touched);
  console.log('Form untouched:', ngForm.untouched);
}
onReset() {
  // this.ngForm.reset(); // Reset the form
  // console.log('Form reset');
  // console.log('Form values after reset:', this.ngForm.value);
  // console.log('Form valid:', this.ngForm.valid);  
  // console.log('Form pristine:', this.ngForm.pristine);
  // console.log('Form dirty:', this.ngForm.dirty);  
  // console.log('Form touched:', this.ngForm.touched);
  // console.log('Form untouched:', this.ngForm.untouched);
}
}
