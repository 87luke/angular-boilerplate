import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _username: string = null;

  constructor() {
    this.setUsername(this.getUsername());
  }

  setUsername(username: string): void {
    if (username) {
      localStorage.setItem('username', username);
      this._username = username;
    }
  }

  getUsername(): string {
    this._username = localStorage.getItem('username');
    return this._username;
  }
}
