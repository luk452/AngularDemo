import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input ('format') format;
  // As we have only 1 input we can simplify it:
  @Input ('appInputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('onFocus');
  }

  @HostListener('blur') onBlur() {
    console.log('onBlur');
    const value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }

}
