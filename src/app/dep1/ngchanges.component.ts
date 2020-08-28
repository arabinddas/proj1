import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ng-changes-test',
  templateUrl: 'changes1.component.html'
})
export class Changes1Component implements OnChanges {
  @Input()
  name: string;
  @Input()
  comment: string;
  @Output()
  out12: EventEmitter<string> = new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['name']);
    console.log(changes['comment']);
    const k = (changes['name'] ? changes['name'].currentValue : '')
      + (changes['comment'] ? changes['comment'].currentValue : '');
    this.out12.emit(k);
  }
}
