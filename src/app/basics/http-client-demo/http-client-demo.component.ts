import {Component} from '@angular/core';
import {Joke, MyJokeServiceService} from './my-joke-service.service';

@Component({
  selector: 'app-http-client-demo',
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.scss']
})
export class HttpClientDemoComponent {
  currentJoke: Joke;
  constructor(private myJokeServiceService: MyJokeServiceService) {
    this.currentJoke = {
      value: 'nothing to joke about yet :)'
    };
  }

  getNewJoke(): void {
    this.myJokeServiceService.getSomeJoke().subscribe(joke => this.currentJoke = joke);
  }
}
