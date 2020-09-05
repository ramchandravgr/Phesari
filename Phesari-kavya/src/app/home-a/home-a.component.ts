import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit {
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
