// @ts-nocheck
/// <reference path="../../p5/addons/p5.global-mode.d.ts" />
'use strict'

function setup () {
    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, displayHeight, 100, 100);
    rectMode(CENTER);
}

function draw () {
    background(mouseY / 2, 100, 100);

    fill(width - mouseY / 2, 100, 100);
    rect(width / 2, height / 2, mouseX + 1, mouseX + 1);
}

// dynamically adjust the canvas to the window
function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
}

