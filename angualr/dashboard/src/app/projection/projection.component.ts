import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-projection',
  imports: [],
  templateUrl: './projection.component.html',
  styleUrl: './projection.component.scss'
})
export class ProjectionComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() title: string = '';
  @ContentChild('projected') content!: ElementRef;
  @ViewChild('varview') projectedContent!: ElementRef;
  @ViewChildren('viwchild') projectedContents!: ElementRef[];
  currentValue: string = '';
  previousValue: string = '';
  myObservable!: Observable<number>;
  mySubscription!: Subscription;
  userservice = inject(UserserviceService);
  timeout: any
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
    this.timeout = setTimeout(() => {
      this.projectedContent.nativeElement.textContent = 'Final View Content After Check';
    }, 5000);
    this.myObservable = new Observable<number>((observer) => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(count++);
        if (count > 5) {
          observer.complete();
          clearInterval(interval);
        }
      }, 1000);
    });

    this.mySubscription = this.myObservable.subscribe({
      next: (value) => console.log('Observable value:', value),
      complete: () => console.log('Observable completed')
    });
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
  ngAfterViewInit(): void {
    this.projectedContents.forEach((element, index) => {
      element.nativeElement.textContent = `Child ${index + 1} content`;
      element.nativeElement.style.color = 'blue';
      element.nativeElement.style.fontSize = '30px';
      console.log(`Child ${index + 1} content:`, element.nativeElement.textContent);
    });
    console.log('ngAfterViewInit called');
    if (this.projectedContent) {
      console.log('View content:', this.projectedContent.nativeElement.textContent);
      this.projectedContent.nativeElement.textContent = 'Updated View Content';
    }
    else {
      console.log('No view content found.');
    }
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called cvcv');
    if (this.projectedContent) {
      console.log('View content after check:', this.projectedContent.nativeElement.textContent);
      // this.projectedContent.nativeElement.textContent = 'Updated View Content After Check';

    } else {
      console.log('No view content found after check.');
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
    if (this.timeout) {
      clearTimeout(this.timeout);
      console.log('Timeout cleared');
    }
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
      console.log('Observable unsubscribed');
    }
  }
}
