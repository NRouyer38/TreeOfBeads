import { Component, OnInit } from '@angular/core';

import cytoscape, { ElementDefinition } from 'cytoscape';

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

    let nodes = fetch(config.graphserver.host + '/get/concepts/node/').then(n => n.json());
    let relations = fetch(config.graphserver.host + '/get/concepts/tree/').then(n => n.json());

    Promise.all([nodes, relations]).then(result => {

      let elements: any = [];

      // CREATE JSON
      // NODES
      result[0].forEach((n: any) => {
        elements.push({
          data: {
            id: n.code
          }, other: n
        });
      });

      //relation
      result[1].forEach((r: any) => {
        elements.push({
          data: {
            id: "r" + r.start,
            source: r.start,
            target: r.end
          }
        })
      });

      let options = {
        name: 'cose',

        fit: true, // whether to fit the viewport to the graph
        directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
        padding: 30, // padding on fit
        circle: false, // put depths in concentric circles if true, put depths top down if false
        grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
        spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
        boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
        avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
        nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
        roots: undefined, // the roots of the trees
        maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
        depthSort: undefined, // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
        animate: false, // whether to transition the node positions
        animationDuration: 500, // duration of animation in ms if enabled
        animationEasing: undefined, // easing of animation if enabled,
        //animateFilter: function (node, i) { return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
        ready: undefined, // callback on layoutready
        stop: undefined, // callback on layoutstop
        //transform: function (node, position) { return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
      };

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

        layout: options,

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
