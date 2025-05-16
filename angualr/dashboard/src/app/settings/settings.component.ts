import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
 onClick() {
    console.log('Button clicked!');
  }

  onMouseOver() {
    console.log('Mouse hovered over the div!');
  }

  onMouseLeave() {
    console.log('Mouse left the div!');
  }

  onKeyDown(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
  }

  onKeyUp(event: KeyboardEvent) {
    console.log('Key released:', event.key);
  }

  onFocus() {
    console.log('Input field focused!');
  }

  onBlur() {
    console.log('Input field lost focus!');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted!');
  }

  onSelectChange(event: Event) {
    console.log('Selected value:', (<HTMLSelectElement>event.target).value);
  }

  onInputChange(event: Event) {
    console.log('Input value:', (<HTMLInputElement>event.target).value);
  }

  onDoubleClick() {
    console.log('Button double clicked!');
  }

  onScroll(event: Event) {
    console.log('Scrolled:', event);
  }

  onResize(event: Event) {
    console.log('Element resized:', event);
  }

  onDragStart(event: DragEvent) {
    console.log('Drag started:', event);
  }

  onDragEnd(event: DragEvent) {
    console.log('Drag ended:', event);
  }

  onTouchStart(event: TouchEvent) {
    console.log('Touch started:', event);
  }

  onTouchEnd(event: TouchEvent) {
    console.log('Touch ended:', event);
  }

  onWheel(event: WheelEvent) {
    console.log('Wheel scroll event:', event);
  }
}
