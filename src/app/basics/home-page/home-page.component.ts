import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  oneWayBinding = 'This is One-way Binding, ready only from component class to view template';
  someInputField = 'initial Value';

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(someInfos: string): void {
    console.log(someInfos);
  }

  resetInputFieldValue(): void {
    this.someInputField = 'initial Value';
  }
}
