import { Component, OnInit , AfterViewInit, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-security-and-protection',
  templateUrl: './security-and-protection.component.html',
  styleUrls: ['./security-and-protection.component.css']
})
export class SecurityAndProtectionComponent implements OnInit {
coll:boolean []=[false,false,false,false,false,false];
positive=false;
negative=false;
  constructor() { }

  ngOnInit(): void {
  }

}

