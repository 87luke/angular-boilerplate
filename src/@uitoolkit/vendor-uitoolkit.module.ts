import {NgModule} from '@angular/core';
import {
  ButtonsModule
} from 'ngx-bootstrap';

const componentList: any[] = [
  ButtonsModule
];

@NgModule({
  imports: componentList,
  exports: componentList,
})

export class VendorUitoolkitModule { }
