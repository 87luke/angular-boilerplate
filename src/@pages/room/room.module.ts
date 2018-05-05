import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import {ROOM_STATES} from './room.states';
import {RoomComponent} from './room.component';

@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    UIRouterModule.forChild({ states: ROOM_STATES })
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  exports: []
})
export class RoomModule {}
