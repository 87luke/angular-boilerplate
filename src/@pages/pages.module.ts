import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { PAGES_STATES } from './pages.states';
import { AppComponent } from '../app/app.component';
import { UIToolkitModule } from '../@uitoolkit/uitoolkit.module';
import { routerConfigFn } from '../@core/config/router.config';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UIRouterModule.forRoot({
      states: PAGES_STATES,
      useHash: false,
      otherwise: { state: environment.states.root },
      config: routerConfigFn
    }),
    UIToolkitModule,
    CommonModule,
    FormsModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: [
    UIToolkitModule
  ]
})
export class PagesModule {}
