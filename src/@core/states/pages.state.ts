import { AppComponent } from '../../app/app.component';
import { HomeComponent } from '../../@pages/home/home.component';
import { RoomComponent } from '../../@pages/room/room.component';
import { Transition } from '@uirouter/core/lib';

const appState = {
  name: 'app',
  component: AppComponent
};

/**
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
const homeState = {
  parent: 'app',
  name: 'home',
  url: '/home',
  component: HomeComponent,
};

/**
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
const roomState = {
  parent: 'app',
  name: 'room',
  component: RoomComponent,
  params: {
    roomId: null
  },
  /*resolve: [
    { token: 'roomId', deps: [Transition], resolveFn: getRoom },
  ],*/
};

/*
export function getRoom (transition: Transition) {
  return transition.params().roomId;
}
*/

const APP_STATES = [
  appState,
  homeState,
  roomState
];


export const ROUTER_OPTS = {
  states: APP_STATES,
  useHash: false,
  otherwise: { state: 'home' }
};
