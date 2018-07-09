import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from '@app/core/guards';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  ],
  declarations: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
     throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
