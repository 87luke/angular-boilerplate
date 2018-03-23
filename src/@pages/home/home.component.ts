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


  public roomId: string = null;

  constructor(private $state: StateService) {}

  ngOnInit(): void {
    console.log('STICCAZZI1');
  }

  setRoom(): void {
    console.log(this.roomId);
    this.$state.go('room', {roomId: this.roomId});
  }
}
