import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { VendorUitoolkitModule } from './vendor-uitoolkit.module';

export class MyHammerConfig extends HammerGestureConfig  {}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    VendorUitoolkitModule
  ],
  exports: [
    VendorUitoolkitModule
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
export class UIToolkitModule {}


