import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private afAuth: AngularFireAuth) {
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getAuthData(): AngularFireAuth {
    return this.afAuth;
  }
}
