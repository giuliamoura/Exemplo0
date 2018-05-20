import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Login } from '../login/login.model';

@Injectable()
export class AuthService {
  private userauthentication: boolean;
  private token: string;
  name: string;
  provider = new firebase.auth.GithubAuthProvider();
  constructor() { }
  
  loginWithGitHub(user: Login) {
    this.provider.addScope('repo');
    this.provider.setCustomParameters({
      'allow_signup': 'true'
    });
    return firebase.auth().signInWithPopup(this.provider)
    .then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
      }
      var user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('You have signed up with a different provider for that email.');
      } else {
        console.error(error);
      }
    });
  }

}
