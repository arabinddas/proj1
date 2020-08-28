import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProfileModel} from './profile.model';

@Component({
  selector: 'app-ch-demo',
  template: `
    <div class="ui page">
      <div class="two column row">
        <div class="column area">
          <form class="ui form">
            <div class="field">
              <label>First Name</label>
              <input type="text" [(ngModel)]="profile.firstName" name="fname" placeholder="First" />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input type="text" [(ngModel)]="profile.lastName" name="lname" placeholder="Last" />
            </div>
          </form>
        </div>
        <div class="column area">
          <table class="ui table">
            <thead><tr><th>Name</th><th>Value</th></tr></thead>
            <tbody>
                <tr><td>First Name</td><td>{{ profile.firstName }}</td></tr>
                <tr><td>Last Name</td><td>{{ profile.lastName }}</td></tr>
                <tr><td>Last Updated</td><td>{{ profile.lastUpdated() | date:'medium' }}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `
})
export class ProfileComponent {
  profile = new ProfileModel('Ansuman', 'Das');
}
