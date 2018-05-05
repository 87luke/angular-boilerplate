import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { VendorUIToolkitModule } from './vendor-uitoolkit.module';

export class MyHammerConfig extends HammerGestureConfig  {}

@NgModule({
  imports: [
    VendorUIToolkitModule
  ],
  exports: [
    VendorUIToolkitModule
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


