import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-native-encap',
  styles: [`
    .highlight {
      text-align: center;
      border: 2px dotted #b21e1e;
      border-radius: 3px;
      border-bottom: 20px;
    }
  `],
  template: `
    <div class="ui horizontal divider header" style="margin-top: 10px">
      Native encapsulation demo
    </div>
    <div class="highlight">
      This Component uses <code>ViewEncapsulation.Emulated</code>
    </div>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class NativeEncapsulationComponent {

}
