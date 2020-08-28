import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `<div class="ui bottom attached tab segment" [class.active]="active">
    <h3>{{ title }}</h3>
    <ng-content></ng-content>
  </div>`
})
export class TabComponent {
  @Input()
  title: string;
  active = false;
}
