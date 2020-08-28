import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appPopup]',
  exportAs: 'appPopup'
})
export class PopupDirective {
  @Input()
  message: string;
  constructor(private elementRef: ElementRef) {
  }
  // @HostListener('click', ['$event.target'])
  displayMsg(div): void {
    console.log(div);
    alert(this.message);
  }
}
