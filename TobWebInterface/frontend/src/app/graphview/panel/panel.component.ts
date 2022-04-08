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
      console.log("exit fullscreen")
      elem.style.paddingTop="0px";
    } else {
      console.log("enter fullscreen")
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

