import { Component, OnInit } from '@angular/core';
import {MyService} from './my.service';

@Component({
  selector: 'app-service-consumer',
  templateUrl: './service-consumer.component.html',
  styleUrls: ['./service-consumer.component.scss']
})
export class ServiceConsumerComponent implements OnInit {

  constructor(public myService: MyService) { }

  ngOnInit(): void {
  }

}
