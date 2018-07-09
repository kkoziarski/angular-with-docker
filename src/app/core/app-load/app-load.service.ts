import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { APP_SETTINGS } from '@app/core/models/app-settings';

@Injectable()
export class AppLoadService {

  constructor(private httpClient: HttpClient) { }

  getSettings(): Promise<any> {
    const promise = this.httpClient.get<any>('/assets/env-config.json')
      .toPromise()
      .then(settings => {
        console.log(settings);
        APP_SETTINGS.ApiHostUrl = settings.API_HOST_URL;
        APP_SETTINGS.EnvName = settings.ENV_NAME;
        APP_SETTINGS.AdalConfig.tenant = settings.AdalConfig.tenant;
        APP_SETTINGS.AdalConfig.clientId = settings.AdalConfig.clientId;
        return settings;
      });

    return promise;
  }
}
