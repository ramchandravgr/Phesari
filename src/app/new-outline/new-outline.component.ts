import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-outline',
  templateUrl: './new-outline.component.html',
  styleUrls: ['./new-outline.component.css']
})
export class NewOutlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public opened="false";
  public lang="none";

  langChange(){
    if(this.lang==="none")
    this.lang="block";
    else
    this.lang="none";
  }

  closeLang(){
    this.lang="none";
  }
}
