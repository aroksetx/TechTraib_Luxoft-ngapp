import {Component, Input} from '@angular/core';
import {AuthorizationService} from '../services/authorization/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() authData;

  constructor(private auth: AuthorizationService) {
  }

  login() {
    this.auth.loginGoogle();
  }

  logout() {
    this.auth.logout();
  }

}
