import { Injectable } from '@angular/core';
import { BehaviorSubject, observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class SiblingsService {
  iamservicevar: string = 'i am from service';
  sharedvalue = new BehaviorSubject<string>('');
 message$ = this.sharedvalue.asObservable();
  constructor() { }

  setValue(value: string) {
    this.sharedvalue.next(value);
    console.log(this.sharedvalue);
  }
}
