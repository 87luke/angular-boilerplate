import { Transition } from '@uirouter/core';
import { LoginComponent } from './login.component';
import {environment} from '../../environments/environment';
import {RoutingService} from '../../@core/services/routing.service';

export function returnTo ($transition$: Transition): any {
  if ($transition$.redirectedFrom() != null) {
    // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
    // Return to the original attempted target state (e.g., contacts)
    return $transition$.redirectedFrom().targetState();
  }

  const $state = $transition$.router.stateService;

  // The user was not redirected to the login state; they directly activated the login state somehow.
  // Return them to the state they came from.
  if ($transition$.from().name !== '') {
    return $state.target($transition$.from(), $transition$.params('from'));
  }

  // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
  return $state.target(environment.states.root);
}

export const loginState = {
  parent: 'app',
  name: 'login',
  url: '/login',
  component: LoginComponent,
  resolve: [
    { token: 'returnTo', deps: [Transition], resolveFn: returnTo }
  ]
};

export const LOGIN_STATES = [
  loginState
];
