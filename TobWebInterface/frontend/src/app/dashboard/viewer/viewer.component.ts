import { Component, OnInit } from '@angular/core';

import cytoscape, { ElementDefinition } from 'cytoscape';
import fcose from 'cytoscape-fcose';

import config from '../../config/config.json';


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  cy = cytoscape({});

  constructor() { }

  ngOnInit(): void {
    console.log("test");
    this.initView();
  }

  initView(): void {

    cytoscape.use( fcose );

    let nodes = fetch(config.graphserver.host + '/get/concepts/node/').then(n => n.json());
    let relations = fetch(config.graphserver.host + '/get/concepts/tree/').then(n => n.json());

    Promise.all([nodes, relations]).then(result => {

      let elements: any = [];

      // CREATE JSON
      // NODES
      result[0].forEach((n:any) => {
        elements.push({data: {
          id: n.code
        }, other: n});
      });

      //relation
      result[1].forEach((r:any) => {
        elements.push({
          data: {
            id: "r"+r.start,
            source: r.start,
            target: r.end
          }
        })
      });

      //cytoscape.use( fcose );

      this.cy = cytoscape({
        container: document.getElementById('cy'), // container to render in

        elements: elements,

        style: [ // the stylesheet for the graph
          {
            selector: 'node',
            style: {
              'background-color': '#666',
              'label': 'data(id)'
            }
          },

          {
            selector: 'edge',
            style: {
              'width': 3,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier'
            }
          }
        ],

        layout: {
          name: 'grid',
          rows: 1
        },

        // interaction options:
        minZoom: 1e-50,
        maxZoom: 1e50,
        zoomingEnabled: true,
        userZoomingEnabled: true,
        panningEnabled: true,
        userPanningEnabled: true,
        boxSelectionEnabled: true,
        selectionType: 'single',
        touchTapThreshold: 8,
        desktopTapThreshold: 4,
        autolock: false,
        autoungrabify: false,
        autounselectify: false,
        // multiClickDebounceTime: 250,

        // rendering options:
        headless: false,
        styleEnabled: true,
        hideEdgesOnViewport: false,
        textureOnViewport: false,
        motionBlur: false,
        motionBlurOpacity: 0.2,
        wheelSensitivity: 1,
        pixelRatio: 'auto'

      });

    });

  }

}
