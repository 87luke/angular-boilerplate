import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UIView } from '@uirouter/angular';

import { PagesModule } from '../@pages/pages.module';
import { CoreModule } from '../@core/core.module';
import { UIToolkitModule } from '../@uitoolkit/uitoolkit.module';

@NgModule({
  declarations: [],
  imports: [
    PagesModule,
    CoreModule,
    BrowserModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [
    UIView
  ]
})
export class AppModule { }
