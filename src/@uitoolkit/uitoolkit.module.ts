import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { VendorUIToolkitModule } from './vendor-uitoolkit.module';
import { NavComponent } from './nav/nav.component';

export class MyHammerConfig extends HammerGestureConfig  {}

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    VendorUIToolkitModule
  ],
  exports: [
    VendorUIToolkitModule,
    NavComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ]
})
export class UIToolkitModule { }


