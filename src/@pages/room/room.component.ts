import {
  ChangeDetectionStrategy,
  Component, OnInit,
  ViewEncapsulation,
  Input
} from '@angular/core';
import {Transition, TransitionService} from '@uirouter/core/lib';

@Component({
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'room.component.html',
  styleUrls: ['room.component.scss']
})
export class RoomComponent implements OnInit {
  @Input() roomId: string;
  public room: string;

  constructor(
    public transitionService: TransitionService,
    public transition: Transition) {}

  ngOnInit(): void {
    this.room = this.transition.params().roomId;
    console.log('Room ==> ' + this.room);
  }
}
