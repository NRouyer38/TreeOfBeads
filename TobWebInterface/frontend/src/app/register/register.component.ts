import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    first_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    last_name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(7)]),
  });

  constructor(private authService: AuthService) {  }

  ngOnInit(): void {
  }

  // Go to the login page
  login(): void {
    window.location.href = "/login"
  }

  // Go to the home page
  home(): void {
    window.location.href = "."
  }

  // Submit register
  register(): void {
    this.authService.register(this.registerForm.value).subscribe((msg) => {
      console.log(msg);
    })
  }

}
