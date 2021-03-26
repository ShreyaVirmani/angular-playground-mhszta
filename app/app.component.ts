import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  appName= 'blog';
  Fname= 'Shreya Virmani';
  getName()
  {

 return this.Fname

  }
  obj= {
Tname : 'noopur' , 

age : 33

  }
siteUrl = window.location.href
  onVersionRelease(): void {
    this.version += 1;
  }
}
