import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { HOME_STATES } from './home.states';
import { HomeComponent } from './home.component';
import { UIToolkitModule } from '../../@uitoolkit/uitoolkit.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    UIRouterModule.forChild({ states: HOME_STATES }),
    UIToolkitModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class HomeModule {}
