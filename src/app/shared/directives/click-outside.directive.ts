import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  @Output() public clickedOutside = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onclick(target: any) {
    const clickedInside = this.el.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickedOutside.emit(target);
    }
  }
}
