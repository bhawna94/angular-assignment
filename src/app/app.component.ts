import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public email: string;
  public password: string;


  constructor() {
    this.email = '';
    this.password = '';
  }
}
