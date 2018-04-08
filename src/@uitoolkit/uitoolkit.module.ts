import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders, Type } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { VendorUIToolkitModule } from './vendor-uitoolkit.module';

export class MyHammerConfig extends HammerGestureConfig  {}

@NgModule({
  imports: [
    BrowserAnimationsModule,
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
export class UIToolkitModule {
    static forRoot(dbCreator: Type<any>, options?: any): ModuleWithProviders {
      return {
        ngModule: UIToolkitModule,
        providers: []
      };
    }
    static forChild(dbCreator: Type<any>, options?: any): ModuleWithProviders {
      return UIToolkitModule.forRoot(dbCreator, options);
    }
}


