/**
 * Documentation: https://valor-software.com/ngx-bootstrap/
 * */

import {NgModule} from '@angular/core';
import {
  BsDropdownModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    BsDropdownModule.forRoot()
  ],
  exports: [
    BsDropdownModule
  ],
})

export class VendorUIToolkitModule { }
