import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  title = "Tree of Beads"
  description = "Formalization and visualization of a training course in Remote Sensing"
  discoverid= "#discover"

  constructor() {
  }

  ngOnInit(): void {

  }

  smoothTo(): void {
    document.querySelector(this.discoverid)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  goToLoginPage(): void {
    window.location.href = "/login";
  }

}
