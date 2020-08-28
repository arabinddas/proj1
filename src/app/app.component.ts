import {Component, Inject} from '@angular/core';
import {TwoService} from './dep1/two.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // AIzaSyDCGkx1MKSx8jn2O1p4vjQ1PG80q3DQMf8
  // title = 'Form Test';
  title = 'Http Test';
  constructor(public twoService: TwoService, @Inject('helloDep1') public dep1: String) {
  }
}
