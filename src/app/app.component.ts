import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  //names: string[] = ['john', 'mike', 'susan'];
  names: string[] = null;
  display: boolean = true;
}