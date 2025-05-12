import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  @Input() idn: number | undefined;
 
  id: number = 0;
  constructor(private routes: ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.idn = changes['idn'].currentValue;
  }

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.id = +params['id'];
      // console.log(this.id);
    })
    // this.id = Number(this.routes.snapshot.paramMap.get('id'));
    // this.id = this.routes.snapshot.params['id'];
    // console.log(this.id);
  }



}
