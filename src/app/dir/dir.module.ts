import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookIfDirective} from './bookIf.component';
import {NgBookIfDemoComponent} from './ngBookIfDemo.component';
import {ProfileComponent} from './profile.component';
import {FormsModule} from '@angular/forms';
import {ProfileWrapperComponent} from './profileWrapper.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ BookIfDirective, NgBookIfDemoComponent, ProfileComponent, ProfileWrapperComponent ],
  exports: [ BookIfDirective, NgBookIfDemoComponent, ProfileComponent, ProfileWrapperComponent ]
})
export class DirModule {
}
