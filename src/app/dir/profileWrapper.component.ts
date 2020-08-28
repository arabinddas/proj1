import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-ch-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="ui author">Arabind Das</div><app-ch-demo></app-ch-demo>`
})
export class ProfileWrapperComponent {
}
