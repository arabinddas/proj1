import {Component} from '@angular/core';

@Component({
  selector: 'app-ng-changes-test1',
  template: `<div class="ui horizontal divider header">
    OnChanges Demo
  </div>
  <div class="ui form">
    <div class="field">
      <label>Name: </label>
      <input #name1 value="{{ name }}" (keyup)="setVals(name1.value, ta1.value)" />
    </div>
    <div class="field">
      <label>Comment: </label>
      <textarea #ta1 (keyup)="setVals(name1.value, ta1.value)">{{ comment }}</textarea>
    </div>
  </div>
  <app-ng-changes-test [name]="name" [comment]="comment" (out12)="handleVal($event)"></app-ng-changes-test>`
})
export class Changes2Component {
  name = 'name1';
  comment = 'comment1';
  setVals(name, cmt) {
    console.log('setvals');
    this.name = name;
    this.comment = cmt + ' ' + Math.random();
  }
  handleVal(k: string): void {
    console.log('--->' + k);
  }
}
