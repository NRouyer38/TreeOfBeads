import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {AuthService} from "src/app/services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAuthentificated = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
     this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
       this.isAuthentificated = isLoggedIn;
     });
  }

  logout() : void {
    localStorage.removeItem("token");
    this.authService.isUserLoggedIn$.next(false);
    this.router.navigate(['login']);
  }

}
