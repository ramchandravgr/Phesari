import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-b',
  templateUrl: './home-b.component.html',
  styleUrls: ['./home-b.component.css']
})
export class HomeBComponent implements OnInit {


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
  constructor() { }

  ngOnInit(): void {
  }

}
