import {Injectable} from '@angular/core';
import {OneService} from './one.service';

@Injectable()
export class TwoService {
  constructor(public oneService: OneService) {
  }
  print() {
    console.log('print from TwoService');
    this.oneService.print();
  }
}
