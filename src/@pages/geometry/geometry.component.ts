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
  templateUrl: 'geometry.component.html',
  styleUrls: ['geometry.component.scss']
})
export class GeometryComponent implements OnInit {
  @Input() roomId: string;
  public room: string;

  constructor(
    public transitionService: TransitionService,
    public transition: Transition) {}

  ngOnInit(): void {
    // console.log(this.transition.params().roomId, this.transition.params().room);
    // this.room = this.transition.params().roomId;
  }
}
