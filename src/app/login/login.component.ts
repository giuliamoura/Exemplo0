
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import { Login } from './login.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: Login = new Login();
  constructor(fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password' : ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  onSubmit(value) {
    var aux1: string = "";
    var aux2: string = "";
    aux1 = value.password;
    aux2 = value.username;
    this.user.password = aux1;
    this.user.username = aux2;
    this.authservice.loginWithGitHub(this.user)
      .then((res) => {
        this.router.navigate(['home'])
      })
      .catch((err) => console.log(err));
  }
}
