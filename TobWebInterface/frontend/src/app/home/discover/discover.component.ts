import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLoginPage(): void {
    window.location.href = "/login";
  }

}
