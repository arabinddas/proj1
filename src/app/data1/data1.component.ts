import {Component, Inject} from '@angular/core';
import {ActionCreator} from './data.actions';
import {TestInterface1} from './test.interface1';

@Component({
  selector: 'app-data1',
  template: `<div style="border: 1px solid dodgerblue">
    <div style="margin-bottom: 10px">Counter is: {{store.getState()['counter']}}</div>
    <button (click)="increment()">Increment</button>&nbsp;
    <button (click)="decrement()">Decrement</button>
  </div>`
})
export class Data1Component {
  constructor(@Inject('store') private store: any, @Inject('test1Token') private test1: TestInterface1) {
    console.log(test1.getRandomVal());
  }
  increment() {
    this.store.dispatch(ActionCreator.increment());
  }
  decrement() {
    this.store.dispatch(ActionCreator.decrement());
  }
}
