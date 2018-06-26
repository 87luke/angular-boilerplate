import {
  ChangeDetectionStrategy,
  Component, OnInit,
  ViewEncapsulation,
  Input
} from '@angular/core';
import {Transition, TransitionService} from '@uirouter/core/lib';

@Component({
  selector: 'app-nav',
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void { }
}
