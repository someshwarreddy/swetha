import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefrmsComponent } from './reactivefrms.component';

describe('ReactivefrmsComponent', () => {
  let component: ReactivefrmsComponent;
  let fixture: ComponentFixture<ReactivefrmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivefrmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivefrmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
