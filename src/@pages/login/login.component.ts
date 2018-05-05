import {
  ChangeDetectionStrategy,
  Component, OnInit,
  ViewEncapsulation,
  Input
} from '@angular/core';
import {AuthService} from '../../@core/services/auth.service';
import { TargetState, StateService } from '@uirouter/core';
import {UserService} from '../../@core/services/user.service';
import { environment } from '../../environments/environment.prod';

@Component({
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() returnTo: TargetState;

  public credentials: any = { username: null, password: null };

  public authenticating: boolean = false;

  public errorMessage: string;

  constructor(
    private authService: AuthService,
    private $state: StateService,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  /**
   * The controller for the `login` component
   *
   * The `login` method validates the credentials.
   * Then it sends the user back to the `returnTo` state, which is provided as a resolve data.
   */
  login(credentials) {
    this.authenticating = true;

    const returnToOriginalState = () => {
      const state = environment.states.home;
      const params = this.returnTo.params();
      const options = Object.assign({}, this.returnTo.options(), { reload: true });
      this.userService.setUsername(this.credentials);
      this.$state.go(state, params, options);
    };

    const showError = (errorMessage) =>
      this.errorMessage = errorMessage;

    const stop = () => this.authenticating = false;
    this.authService.authenticate(credentials.username, credentials.password)
      .then(returnToOriginalState)
      .catch(showError)
      .then(stop, stop);
  }
}
