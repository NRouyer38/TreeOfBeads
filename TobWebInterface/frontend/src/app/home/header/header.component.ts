import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLoginPage(): void {
    window.location.href = "/login";
  }

  goToRegisterPage(): void {
    window.location.href = "/register"
  }

}
