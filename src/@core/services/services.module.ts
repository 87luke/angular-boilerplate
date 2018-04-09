import {NgModule} from '@angular/core';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {RoutingService} from './routing.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AuthService,
    UserService,
    RoutingService
  ]
})
export class ServicesModule { }
