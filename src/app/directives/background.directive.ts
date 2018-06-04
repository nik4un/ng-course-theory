import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @Input() hoveColor = 'yellow';
  @Input() defaultColor = 'cyan';

  @HostBinding('style.backgroundColor') background: string;

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoveColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }
}
