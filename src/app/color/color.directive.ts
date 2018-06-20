import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.color') color;

  @HostListener('click') onClick() {
    this.color = 'red';
  }
}
