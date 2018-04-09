import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { PAGES_STATES } from './pages.states';
import { AppComponent } from '../app/app.component';
import { FormsModule } from '@angular/forms';
import { UIToolkitModule } from '../@uitoolkit/uitoolkit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    UIRouterModule.forRoot({
      states: PAGES_STATES,
      useHash: false,
      otherwise: { state: 'home' }
    }),
    UIToolkitModule
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
