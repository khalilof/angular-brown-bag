import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private searchValueSubject = new BehaviorSubject<string>('');
  public readonly searchValueObservable = this.searchValueSubject.asObservable();
  constructor() { }

  setSearchValue(event: any): void {
    this.searchValueSubject.next(event.target.value);
  }

}
