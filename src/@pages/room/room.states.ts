import {RoomComponent} from './room.component';
import { Transition } from '@uirouter/core';

export function getRoom ($transition$) {
  return $transition$.params().roomId;
}

export const roomState = {
  parent: 'app',
  name: 'room',
  url: '/room',
  component: RoomComponent,
  params: { roomId: null },
  resolve: [
    { token: 'roomId', deps: [Transition], resolveFn: getRoom }
  ]
  // data: { requiresAuth: true }
};

export const ROOM_STATES = [
  roomState
];
