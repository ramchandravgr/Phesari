import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-selling',
  templateUrl: './start-selling.component.html',
  styleUrls: ['./start-selling.component.css']
})
export class StartSellingComponent implements OnInit {
  public col:any=[false,false,false,false,false,false];

   cl(cll:Number):void
  {
    for(var i=0;i<this.col.length;i++)
    {
      if(i!=cll)
      {
        this.col[i]=false;
      }
      else
      this.col[i]=!this.col[i];
    }
  }

  constructor() { }
  

  ngOnInit(): void {
  }

}
