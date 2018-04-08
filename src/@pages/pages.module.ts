import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { ROUTER_OPTS } from './pages.state';
import { AppComponent } from '../app/app.component';
import { FormsModule } from '@angular/forms';
import { UIToolkitModule } from '../@uitoolkit/uitoolkit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    UIRouterModule.forRoot(ROUTER_OPTS)
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class PagesModule {}
