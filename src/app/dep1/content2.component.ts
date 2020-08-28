import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-two-message',
  template: `<div class="ui header">
    Header here
  </div>
  <div>
    <ng-content></ng-content>
  </div>`
})
export class Content2Component {
  @HostBinding('attr.class')
  cssClass = 'header2';
}
