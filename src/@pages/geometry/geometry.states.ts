import {GeometryComponent} from './geometry.component';
import { Transition } from '@uirouter/core';

export function getRoom ($transition$) {
  return $transition$.params().roomId;
}

export const geometryState = {
  parent: 'app',
  name: 'geometry',
  url: '/geometry',
  component: GeometryComponent,
  params: { roomId: null },
  resolve: [
    { token: 'roomId', deps: [Transition], resolveFn: getRoom }
  ],
  data: { requiresAuth: true }
};

export const GEOMETRY_STATES = [
  geometryState
];
