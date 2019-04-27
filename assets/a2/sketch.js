// @ts-nocheck
/// <reference path="../../p5/addons/p5.global-mode.d.ts" />
'use strict'

let size;
var maxCount = 5000; // max count of the circles
var currentCount = 1;
var x = [];
var y = [];
var r = [];

function setup () {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0.5);

  // first circle
  x[0] = windowWidth / 2;
  y[0] = windowHeight / 2;
  r[0] = 10;
}

function draw () {
  clear();

  // create a random set of parameters
  var newR = random(1, 7);
  var newX = random(newR, windowWidth - newR);
  var newY = random(newR, windowHeight - newR);

  var closestDist = Number.MAX_VALUE;
  var closestIndex = 0;
  // which circle is the closest?
  for (var i = 0; i < currentCount; i++) {
    var newDist = dist(newX, newY, x[i], y[i]);
    if (newDist < closestDist) {
      closestDist = newDist;
      closestIndex = i;
    }
  }

  // aline it to the closest circle outline
  var angle = atan2(newY - y[closestIndex], newX - x[closestIndex]);

  x[currentCount] = x[closestIndex] + cos(angle) * (r[closestIndex] + newR);
  y[currentCount] = y[closestIndex] + sin(angle) * (r[closestIndex] + newR);
  r[currentCount] = newR;
  currentCount++;

  // draw them
  for (var i = 0; i < currentCount; i++) {
    fill(50);
    ellipse(x[i], y[i], r[i] * 2, r[i] * 2);
  }

  if (currentCount >= maxCount) noLoop();
}

