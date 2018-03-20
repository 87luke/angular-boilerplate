import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-page-home',
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {}
