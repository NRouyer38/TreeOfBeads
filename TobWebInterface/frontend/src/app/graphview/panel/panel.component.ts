import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';

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


  fullscreenmodes(): void { 
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

