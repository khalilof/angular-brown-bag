import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss']
})
export class BuiltInDirectivesComponent implements OnInit {
  ngClassRed = true;
  myDynamicallyCreatedStyle = {'background-color': '#ff97fe'};

  users: User[] = [
    {
      name: 'John',
      gender: 'male',
      age: 15,
    },
    {
      name: 'Natalie',
      gender: 'female',
      age: 18,
    },
    {
      name: 'Max',
      gender: 'male',
      age: 70,
    },
    {
      name: 'George',
      gender: 'other',
      age: 35,
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}


interface User {
  gender: string;
  name: string;
  age: number;
}
