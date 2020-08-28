import {Component, HostBinding, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-message]',
  template: `<div class="header">
    {{ header }}
    <p>
      <ng-content></ng-content>
    </p>
  </div>`
})
export class ContentComponent {
  @HostBinding('attr.class')
  cssClass: 'ui message';
  @Input()
  header: string;
}
