import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {storeFactory, test1Factory} from './data.state';
import {Data1Component} from './data1.component';
import {TestInterface1} from './test.interface1';

// export const storeToken = new InjectionToken('App.Store');
// export const test1Token: InjectionToken<TestInterface1> = new InjectionToken<TestInterface1>('TestInterface1');

@NgModule({
  imports: [ CommonModule ],
  providers: [
    { provide: 'store', useFactory: storeFactory },
    { provide: 'test1Token', useFactory: test1Factory }
  ],
  declarations: [ Data1Component ],
  exports: [ Data1Component ]
})
export class DataModule {
}
