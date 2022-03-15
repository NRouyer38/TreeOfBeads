import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Tree of Beads"
  description = "Formalization and visualization of a training course in Remote Sensing"
  bg_path = [
    "TobWebInterface/src/assets/img/sentinel2-bg.jpg",
    "TobWebInterface/src/assets/img/sentinel2-bg2.jpg"
  ];
  current_bg_path = ""
  time_to_change_bg = 5000

  constructor() { }

  ngOnInit(): void {
    this.changeBackGround();
  }

  changeBackGround(): void {

    let rnd = Math.floor(Math.random()*(this.bg_path.length));

  }

}
