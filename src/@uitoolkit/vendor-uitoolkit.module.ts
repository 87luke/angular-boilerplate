import {NgModule} from '@angular/core';
import {
  ButtonsModule,
  BsDropdownModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    ButtonsModule,
    BsDropdownModule
  ],
})

export class VendorUIToolkitModule { }
