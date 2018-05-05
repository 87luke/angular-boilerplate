import {
  ChangeDetectionStrategy,
  Component, OnInit,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import {StateService} from '@uirouter/core/lib';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page-home',
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  public roomId: number;

  public lat: number = 0;

  public lng: number = 0;

  refresh: Subject<any> = new Subject();
  /**
   * @hidden
   */
  refreshSubscription: Subscription;

  constructor(
    private $state: StateService,
    private cdr: ChangeDetectorRef
  ) {
    this.roomId = 10;
  }

  ngOnInit(): void {
    this.getCurrentPosition();
    this.refreshSubscription = this.refresh.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  getCurrentPosition(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.refresh.next();
    }, (error) => {
      console.log(error);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

  setRoom(roomId: number): void {
    this.roomId = roomId;
    this.$state.go('room', {roomId: this.roomId});
  }
}
