import {
  ChangeDetectionStrategy,
  Component, OnInit,
  ViewEncapsulation
} from '@angular/core';
import {StateService} from '@uirouter/core/lib';


@Component({
  selector: 'app-page-home',
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  public roomId: number;

  constructor(private $state: StateService) {
    this.roomId = 10;
  }

  ngOnInit(): void { }

  setRoom(roomId: number): void {
    this.roomId = roomId;
    this.$state.go('room', {roomId: this.roomId});
  }
}
