import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { LOGIN_STATES } from './login.states';
import { LoginComponent } from './login.component';
import { UIToolkitModule } from '../../@uitoolkit/uitoolkit.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild({ states: LOGIN_STATES }),
    UIToolkitModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class LoginModule {}
