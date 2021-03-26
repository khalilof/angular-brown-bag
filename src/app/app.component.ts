import { Component } from '@angular/core';
import {MyService} from './basics/service-consumer/my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-of-the-day';

  constructor(public myService: MyService) {
  }
}
