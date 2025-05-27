import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-projection',
  imports: [],
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.scss'
})
export class ProjectionComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() title: string = '';
  @ContentChild('projected') content!: ElementRef
  currentValue: string = '';
  previousValue: string = '';

  userservice = inject(UserserviceService);
  constructor() { }

 



  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');

    // Check if the 'title' input has changed
    const titleChange = changes['title'];
    console.log('current value:', titleChange.currentValue);
    this.currentValue = titleChange.currentValue;
    console.log('Change detected:', changes);
    if (titleChange && !titleChange.firstChange) {
      this.previousValue = titleChange.previousValue;
      console.log('Previous:', titleChange.previousValue);

    } else {
      console.log('This is the first change. No previous value.');
    }

  }
  ngOnInit() {
    this.userservice.gertUsers();
    console.log('ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
    if (this.currentValue !== this.previousValue) {
      console.log('p value', this.previousValue,);
      console.log('current', this.currentValue);
      // this.previousValue = this.currentValue; // Update previous value
    } else {
      console.log('No change in value');
    }
  }

   ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    if (this.content) {
      console.log('Projected content:', this.content.nativeElement.textContent);
    } else {
      console.log('No projected content found.');
    }
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    if (this.content) {
      console.log('Projected content after check:', this.content.nativeElement.textContent);
    } else {
      console.log('No projected content found after check.');
    }
  }
}
