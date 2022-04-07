import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit(): void {
  }

  setFullSscreen(): void { 
    var elem = <HTMLElement>document.getElementById("graphview");
    if (document.fullscreenElement) {
        document.exitFullscreen()
        elem.style.paddingTop="50px";
    } else {
        elem.requestFullscreen();
        elem.style.paddingTop="0px";
    }
  }
}

