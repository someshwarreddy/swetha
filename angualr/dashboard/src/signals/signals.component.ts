import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
    count = signal(0);
    double = computed(()=> this.count() * 2);
    user = signal<{ name: string, age: number }|null>(null);

  constructor() {
    this.count.set(3);
    effect(() => {
      console.log('Count changed:', this.user());
    });
   
  }

  increment() {
    this.count.update((prev) => prev + 1);
  }
  decrement() {
    this.count.update((prev) => prev - 1);
  }

  reset() {
    this.count.set(0);
  }
  fetchuser(){
    setTimeout(() => {
        this.user.set({ name: 'swetha', age: 30 });
    }, 1000);
  console.log(this.user());
  }

  clearuser(){
    this.user.set(null);
  }

}
