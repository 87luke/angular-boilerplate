import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _username: string = null;

  constructor() {
    // this.setUsername(localStorage.getItem('username'));
  }

  setUsername(username: string): void {
    if (username) {
      // localStorage.setItem('username', username);
      this._username = username;
    }
  }

  getUsername(): string {
    return this._username;
  }
}
