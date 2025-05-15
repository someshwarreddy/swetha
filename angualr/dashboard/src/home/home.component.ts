import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";
import { AboutusComponent } from "../aboutus/aboutus.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule, RouterLink, ContactComponent, AboutusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  parentvalue: string = '';
products = [
  { id: 0, name: 'Product 1', price: 10 },
  { id: 1, name: 'Product 2', price: 20 },
  { id: 2, name: 'Product 3', price: 30 },
  { id: 3, name: 'Product 4', price: 40 },
  
]

id :number= 1
fromchild(value: string) {
  console.log(value);
 this.parentvalue = value;
}
}
