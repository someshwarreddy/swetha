import { Component, input, Input, OnInit } from '@angular/core';
import { SiblingsService } from '../siblings.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-aboutus',
  imports: [CommonModule],
  // providers: [SiblingsService],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

  // servicesibling = input( SiblingsService);
  @Input() idn: string | undefined;

  constructor(private servicesibling: SiblingsService) {
    console.log(this.servicesibling.iamservicevar);
  }
  sendtochild() {
    alert('i am from aboutus');
    this.servicesibling.setValue('i am from aboutus');
  }

}
