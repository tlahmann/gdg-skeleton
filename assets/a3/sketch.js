// @ts-nocheck
/// <reference path="../../p5/addons/p5.global-mode.d.ts" />
'use strict';

// https://p5js.org/reference/#/p5/imageMode 
// https://p5js.org/reference/#/p5/noStroke 
// https://p5js.org/reference/#/p5/background 
// https://p5js.org/reference/#/p5/image

// https://en.wikipedia.org/wiki/Circle#Equations

let currentShape;
let shapes;

function preload () {
  shapes = [];
  shapes.push(loadImage('data/module_1.svg'));
  shapes.push(loadImage('data/module_2.svg'));
  shapes.push(loadImage('data/module_3.svg'));
}

function setup () {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noStroke();
  // set the current shape to the first in the array
  currentShape = shapes[0];
}

function draw () {
  // if we draw a background with alpha=50 the last few frames get drawn for a short amount of time
  background(color(255, 50));
  // math to calculate a circle
  // x = a + r * cos t
  // y = b + r * sin t
  let a = (width / 2);
  let b = (height / 2);
  let r = (width / 4);
  let t = frameCount / 10;
  let posX = a + r * cos(t);
  let posY = b + r * sin(t);
  push();
  translate(posX, posY);
  // draw an image 
  image(currentShape, 0, 0, 50, 50);
  pop();
}

function keyReleased () {
  if (key == '1') currentShape = shapes[0];
  if (key == '2') currentShape = shapes[1];
  if (key == '3') currentShape = shapes[2];
}

// dynamically adjust the canvas size to the window size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

