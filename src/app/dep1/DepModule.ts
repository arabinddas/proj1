import {NgModule} from '@angular/core';
import {OneService} from './one.service';
import {TwoService} from './two.service';
import {PopupDirective} from './popup.directive';
import {ContentComponent} from './content.component';
import {Content2Component} from './content2.component';
import {TabComponent} from './tab.component';
import {TabSetComponent} from './tabSet.component';
import {CommonModule} from '@angular/common';
import {Changes1Component} from './ngchanges.component';
import {Changes2Component} from './changes2.component';

@NgModule({
  imports: [ CommonModule ],
  providers: [ OneService, TwoService,
    {provide: 'helloDep1', useFactory: abc} ],
  declarations: [ PopupDirective, ContentComponent, Content2Component, TabComponent,
    TabSetComponent, Changes1Component, Changes2Component ],
  exports: [ PopupDirective, ContentComponent, Content2Component, TabComponent,
    TabSetComponent, Changes1Component, Changes2Component ]
})
export class DepModule {
}

export function abc() {
  if (Math.random() > .5) {
    return 'Greater';
  } else {
    return 'Less';
  }
}
