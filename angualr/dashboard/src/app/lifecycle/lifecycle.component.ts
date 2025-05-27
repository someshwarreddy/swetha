import { Component } from '@angular/core';
import { ProjectionComponent } from "../projection/projection.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  imports: [ProjectionComponent,  CommonModule,
    FormsModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent {
value: string = 'i am first value';
message: string = 'This is a message from the parent component';

}
