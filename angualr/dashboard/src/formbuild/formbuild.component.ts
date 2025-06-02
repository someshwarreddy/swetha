import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formbuild',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formbuild.component.html',
  styleUrl: './formbuild.component.scss'
})
export class FormbuildComponent {
  FormBuilder = inject(FormBuilder);

get aliases() {
  return this.profileForm.get('alias') as FormArray;  }

  profileForm = this.FormBuilder.group(
    {
    firstName: ['someshwar'],
    lastName: ['swetha'],
    address: this.FormBuilder.group({
      street: ['usa'],
      city: ['canada'],
      state: ['tg'],
      zip: ['123456']
    }),
    alias: this.FormBuilder.array([ this.FormBuilder.control(' ')])
  }
);
onSubmit() {
  console.log('Form submitted:', this.profileForm.value); 
}
onReset(){
  this.profileForm.reset();
}
upadate(){
  this.profileForm.patchValue({
    firstName: 'updatedFirstName',
    lastName: 'updatedLastName',
    address: {
      street: 'updatedStreet',
      city: 'updatedCity',
      state: 'updatedState',
      zip: 'updatedZip'
    }
  });
  console.log('Form updated:', this.profileForm.value);
}

addAlias() {
  this.aliases.push(this.FormBuilder.control(''));
  console.log('Alias added:', this.aliases.value);  
}
removeAlias(index: number) {
  this.aliases.removeAt(index);
  console.log('Alias removed at index:', index, 'Current aliases:', this.aliases.value);
}
upadateAlias(index: number) {
  this.aliases.at(index).setValue('updatedAlias');
  console.log('Alias updated at index:', index, 'Current aliases:', this.aliases.value);
}
}
