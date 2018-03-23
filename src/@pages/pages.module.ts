import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {UIRouterModule} from '@uirouter/angular';
import {ROUTER_OPTS} from '../@core/states/pages.state';
import {AppComponent} from '../app/app.component';
import {RoomComponent} from './room/room.component';
import {FormsModule } from '@angular/forms';
import {UIToolkitModule} from '../@uitoolkit/uitoolkit.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent
  ],
  imports: [
    FormsModule,
    UIRouterModule.forRoot(ROUTER_OPTS),
    UIToolkitModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class PagesModule {}
