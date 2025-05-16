import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SiblingsService } from '../siblings.service';
@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  // providers: [SiblingsService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnChanges {
  @Input() idn: string | undefined;
  @Output() childvalue = new EventEmitter<string>();

  id: number = 0;
  constructor(private routes: ActivatedRoute,
    private servicesibling: SiblingsService) {
    console.log(this.servicesibling.iamservicevar);

  }


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
    // console.log(this.id)
  
      this.servicesibling.message$.subscribe((data) => {
      console.log("i am recieved data from a component ",data);
    })
  }
  toparent() {
    this.childvalue.emit('i am from child');
  }

  // ngOnDestroy(): void {
  //  this.servicesibling.sharedvalue.next('');
  // }
}
