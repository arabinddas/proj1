import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngBookIf]'
})
export class BookIfDirective {
  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {
  }
  @Input()
  set ngBookIf(cond) {
    if (cond) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}
