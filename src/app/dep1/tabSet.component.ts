import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'app-tab-set',
  template: `<div class="ui top attached tabular menu">
    <a *ngFor="let tab of tab" class="item" [class.active]="tab.active" (click)="setActive(tab)">
      {{ tab.title }}
    </a>
  </div>
  <ng-content></ng-content>`
})
export class TabSetComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  tab: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    this.tab.toArray()[0].active = true;
  }

  setActive(tab: TabComponent) {
    this.tab.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
}
