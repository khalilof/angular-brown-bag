import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Joke {
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyJokeServiceService {

  JOKE_API = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]&firstName=khalil&lastName=khalil';
  constructor(private http: HttpClient) { }


  getSomeJoke(): Observable<Joke> {
    return this.http.get(this.JOKE_API)
      .pipe(map((response: any) => {
        return {value: response.value.joke} as Joke;
      }));
  }
}
