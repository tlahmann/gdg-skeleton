// @ts-nocheck
/// <reference path="../../p5/addons/p5.global-mode.d.ts" />
'use strict'

// one names js object to hold values for the object to draw
let drawObject = {
  angle: 0,
  size: 100
};

function setup () {
  createCanvas(windowWidth, windowHeight);
  // set stroke weight globally
  strokeWeight(3);
  // set stroke color globally
  stroke(59, 134, 134);
  // set fill color globally
  fill(121, 189, 154);

  rectMode(CENTER);
}

function draw () {
  // Clear the canvas
  clear();

  // push the canvas aside
  push();
  // move the center point to W/2, H/2
  translate(width / 2, height / 2);
  // rotate according to the angle stored for the object to draw
  rotate(drawObject.angle * (PI / 180));
  // draw a rectangle
  rect(0, 0, drawObject.size, drawObject.size);
  // get the previously pushed contents back on screen
  pop();
}

function keyPressed () {
  // not using arrow keys because if will interfere with the used iFrames
  switch (key.toLowerCase()) {
    case 'w': // wambo
      drawObject.size += 5; break;
    case 'm': // mini
      drawObject.size = max(drawObject.size - 5, 5); break;
    case 'b': // turn clockwise
      drawObject.angle += 5; break;
    case 'v': // turn counterclockwise
      drawObject.angle -= 5; break;
    default: break;
  }
}

// dynamically adjust the canvas size to the window size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
