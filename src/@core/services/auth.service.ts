import { Injectable } from '@angular/core';
import {UserService} from './user.service';

/**
 * This service is a start of an Authentication Service.
 */
@Injectable()
export class AuthService {
  // data

  constructor(private _userService: UserService) { }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated(): boolean {
    return this._userService.getUsername() ? true : false;
  }

  /**
   * Given a username and password, checks that the username matches one of the known
   * usernames (this.usernames), and that the password matches 'password'.
   */
  authenticate(username, password) {
    const checkCredentials = () => new Promise<string>((resolve, reject) => {

      return (username && password) ? resolve(username) : reject('Invalid username or password');
    });

    return checkCredentials()
      .then((authenticatedUser: string) => {
        // TODO loggedIn
        this._userService.setUsername(authenticatedUser);
      });
  }

  /** Logs the current user out */
  logout() {}
}
