import { Component, OnInit , AfterViewInit, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-security-and-protection',
  templateUrl: './security-and-protection.component.html',
  styleUrls: ['./security-and-protection.component.css']
})
export class SecurityAndProtectionComponent implements OnInit {
public coll="none";
openn(){
  if(this.coll==="none")
  this.coll="block";
  else
  this.coll="none";
}
  constructor() { }

  ngOnInit(): void {
  }

}
