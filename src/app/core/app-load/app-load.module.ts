import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppLoadService } from '@app/core/app-load/app-load.service';
import { throwIfAlreadyLoaded } from '@app/core';

export function get_settings(appLoadService: AppLoadService) {
    return () => appLoadService.getSettings();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [AppLoadService], multi: true }
  ]
})
export class AppLoadModule {
  constructor( @Optional() @SkipSelf() parentModule: AppLoadModule) {
    throwIfAlreadyLoaded(parentModule, 'AppLoadModule');
 }
}
