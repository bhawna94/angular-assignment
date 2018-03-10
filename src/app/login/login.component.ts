import {Component, Input} from '@angular/core';
import {Login} from './login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  @Input() email: string;
  password: string;
  person: Login = new Login('', '');

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }
  formsubmission() {
    this.router.navigate(['/login/home']);
  }
}
