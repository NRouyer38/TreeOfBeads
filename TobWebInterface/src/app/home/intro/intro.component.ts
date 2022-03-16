import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  title = "Tree of Beads"
  description = "Formalization and visualization of a training course in Remote Sensing"
  bg_path = [
    "src/assets/img/sentinel2-bg1.jpg",
    "src/assets/img/sentinel2-bg2.jpg"
  ];
  time_to_change_bg = 5000

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    
  }

  changeBackGround(): void {

    let rnd = Math.floor(Math.random() * (this.bg_path.length));

    setTimeout(() => {
      this.changeBackGround();
    }, 5000)

  }

}
