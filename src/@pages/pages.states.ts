import {AppComponent} from '../app/app.component';

export const appState = {
  name: 'app',
  component: AppComponent,
};

export const homeState = {
  name: 'home.**',
  url: '/home',
  loadChildren: './home/home.module#HomeModule'
};

export const loginState = {
  name: 'login.**',
  url: '/login',
  loadChildren: './login/login.module#LoginModule'
};

export const roomState = {
  name: 'room.**',
  url: '/room',
  loadChildren: './room/room.module#RoomModule'
};


export const PAGES_STATES = [
  appState,
  loginState,
  homeState,
  roomState
];
