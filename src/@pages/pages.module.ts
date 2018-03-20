import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {HomeComponent} from './home/home.component';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class PagesModule {}
