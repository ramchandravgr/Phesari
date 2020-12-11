import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  h=[true,false,false,false];
  ht=0;
  b=0;
  o=[false,false,false,false,false,false,false,false];
  open=false;
  positive=false;
  negative=false;
  constructor() { }

  ngOnInit(): void {
  }

}
