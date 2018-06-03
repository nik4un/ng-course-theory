import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {


  @HostBinding('style.border') border: string; // Способ 2 стилем через директивы без использования рендерера

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {

  }

  // Эта конструкция, когда нужно использовать событие
  // @HostListener('mouseenter', ['$event']) onmouseenter(evt: Event) {
  //   console.log(evt);
  // }

  @HostListener('mouseenter') onMousEenter() {
    const { nativeElement } = this.element;
    this.renderer.addClass(nativeElement, 'white-text');
    this.renderer.setStyle(nativeElement, 'background-color', 'red');
    this.border = '2px solid green'; // Способ 2
  }

  @HostListener('mouseleave') onMousLeave() {
    const { nativeElement } = this.element;
    this.renderer.removeClass(nativeElement, 'white-text');
    this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    this.border = 'none'; // Способ 2
  }
}
