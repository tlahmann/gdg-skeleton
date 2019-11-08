// @ts-nocheck
/// <reference path="../../p5/addons/p5.global-mode.d.ts" />
'use strict'

// https://p5js.org/reference/#/p5/clear
// https://p5js.org/reference/#/p5/fill
// https://p5js.org/reference/#/p5/color
// https://p5js.org/reference/#/p5/rect
// https://p5js.org/reference/#/p5/circle
// https://p5js.org/reference/#/p5/triangle

// https://p5js.org/reference/#/p5/beginShape
// https://p5js.org/reference/#/p5/vertex
// https://p5js.org/reference/#/p5/endShape

function setup () {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    clear();

    // filling as RGB value
    fill(130, 200, 0);
    rect(100, 100, 50, 50);

    // filling with alpha value needs a function call to `color(4)`
    fill(color(250, 0, 30, 128));
    circle(300, 100, 50);
    circle(310, 125, 50);

    // `color(2)` results in a grey value with alpha
    fill(color(0, 128));
    triangle(180, 225, 208, 170, 236, 225);
    triangle(190, 235, 218, 180, 246, 235);

    fill(0, 0, 255);
    // more complex forms can be drawn using shapes
    beginShape();
    vertex(420, 120);
    vertex(440, 120);
    vertex(440, 140);
    vertex(460, 140);
    vertex(460, 160);
    vertex(420, 160);
    endShape(CLOSE);
}

// dynamically adjust the canvas size to the window size
function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
}
