import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ServicesModule} from './services/services.module';
import {PipesModule} from './pipes/pipes.module';
import {DirectivesModule} from './directives/directives.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    ServicesModule,
    PipesModule,
    DirectivesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class CoreModule {}
