import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { LayoutModule } from '../layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule
  ],
  declarations: [],
  exports: [ BrowserAnimationsModule ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
