// @ts-nocheck
/// <reference path="../../p5/addons/p5.global-mode.d.ts" />
'use strict'

function setup () {
    createCanvas(windowWidth, windowHeight);
}

function draw () {
    clear();

    // filling as RGB value
    fill(55, 200, 0);
    rect(100, 100, 50, 50);

    // filling with alpha value needs a function call to `color(4)`
    fill(color(255, 0, 255, 128));
    ellipse(300, 100, 50);
    ellipse(310, 125, 50);

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

