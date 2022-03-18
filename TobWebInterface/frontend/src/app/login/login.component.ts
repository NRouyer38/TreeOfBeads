import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(7)]),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // Go to the register page
  register():void {
    window.location.href = "./register";
  }

  // Go to the home page
  home(): void {
    window.location.href = ".";
  }

  // Submit login
  login(): void {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((msg) => {
      console.log(msg);
    });
  }

}
