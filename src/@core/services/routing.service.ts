import { Injectable } from '@angular/core';

@Injectable()
export class RoutingService {
  private _stateAfterLogin: any = null;

  constructor() {
    // this.setUsername(localStorage.getItem('username'));
  }

  setStateAfterLogin(state: any): void {
    if (state) {
      // localStorage.setItem('username', username);
      this._stateAfterLogin = state;
    }
  }

  getStateAfterLogin(): string {
    return this._stateAfterLogin;
  }
}
