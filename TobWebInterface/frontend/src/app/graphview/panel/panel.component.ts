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
    document.addEventListener('fullscreenchange', this.fullscreenchanged);
  }
  
  fullscreenchanged() : void {
    var elem = <HTMLElement>document.getElementById("graphview");
    if (document.fullscreenElement) {
      elem.style.paddingTop="0px";
    } else {
      elem.style.paddingTop="50px";
    }
  }
 
  setFullSscreen(): void { 
    var elem = <HTMLElement>document.getElementById("graphview");
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        elem.requestFullscreen();
    }
  }
}

