import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-ngIf-demo',
  template: `<div class="ui fluid">
    Value is <b *ngBookIf="testCondition">If Demo</b>
    <div>
      <button (click)="testCondition = !testCondition">Toggle</button>
    </div>
    <ng-content></ng-content>
    <div>
      The items:
      <div *ngFor="let item of items">
        <span>Key is {{ item.key }}</span>
        <span>Value is {{ item.val }}</span>
        <span *ngIf="item.abc.length > 5">Arr element is {{ item.abc[6] }}</span>
      </div>
      <button (click)="addItem()">Add Item</button>
    </div>
  </div>`
})
export class NgBookIfDemoComponent {
  testCondition = true;
  items: Demo1[] = [];
  constructor() {
    this.items.push(new Demo1('aa', 'bb', []));
    this.items.push(new Demo1('cc', 'dd', []));
    this.items.push(new Demo1('ee', 'ff', []));
  }
  // tslint:disable-next-line:member-ordering
  k = (() => {
    let count = 0;
    const arr = [ 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss' ];
    return () => {
      const j = [ arr[count], arr[count + 1] ];
      count = count + 2;
      return j;
    };
  })();
  addItem() {
    const kArr = this.k();
    this.items.push(new Demo1(kArr[0], kArr[1], ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']));
  }
}

class Demo1 {
  constructor(public key: string, public val: string, public abc: string[]) {
    /*setInterval(() => {
      this.key = this.key + '1';
      console.log('current key is - ' +  this.key);
      if (this.abc.length > 5) {
        this.abc[6] = this.abc[6] + 'z';
      }
    }, 10000);*/
  }
}
