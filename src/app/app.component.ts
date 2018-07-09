import { Component } from '@angular/core';
import { APP_SETTINGS } from '@app/core/models/app-settings';
import { environment } from '@env/environment';

@Component({
  selector: 'ngdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngdc';

  get settings() {
    return APP_SETTINGS;
  }

  get env() {
    return environment;
  }
}
