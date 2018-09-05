import {Component, OnInit} from '@angular/core';
import {User} from 'firebase';
import {AuthorizationService} from './services/authorization/authorization.service';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tech train demo app.';
  authData = null;
  userUID = null;
  userName = null;
  baseURL = null;

  constructor(private auth: AuthorizationService,
              private plLocation: PlatformLocation) {
    this.baseURL = this.getBaseUrl();
  }

  ngOnInit(): void {
    this.authData = this.auth.getAuthData();
    this.authData.user
      .subscribe((user: User) => {
        user ? this.userUID = user.uid : this.userUID = null;
        user ? this.userName = user.displayName : this.userName = null;
      });
  }

  private getBaseUrl(): string {
    return (this.plLocation as any).location.origin;
  }

}
