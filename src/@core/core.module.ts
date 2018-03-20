import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ServicesModule} from './services/services.module';
import {PipesModule} from './pipes/pipes.module';
import {DirectivesModule} from './directives/directives.module';
@NgModule({
  declarations: [],
  imports: [
    ServicesModule,
    PipesModule,
    DirectivesModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class CoreModule {}
