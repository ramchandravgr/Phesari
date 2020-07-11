import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
