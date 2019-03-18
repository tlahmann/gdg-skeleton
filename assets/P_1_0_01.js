// @ts-nocheck
'use strict'

let size

function setup () {
    let b = select('#A_1_0');
    size = {width: b.width - 2, height: 500};
    var canvas = createCanvas(size.width, size.height);
    canvas.parent('A_1_0');
    noCursor();

    colorMode(HSB, size.height, 100, 100);
    rectMode(CENTER);
}

function draw () {
    background(mouseY / 2, 100, 100);

    noStroke();
    fill(size.height - mouseY / 2, 100, 100);
    let d = int(dist(size.width / 2, size.height / 2, mouseX, mouseY)) * 2;
    rect(size.width / 2, size.height / 2, d, d);
    stroke(0, 0, 0);
    line(mouseX, mouseY - 10, mouseX, mouseY + 10);
    line(mouseX - 10, mouseY, mouseX + 10, mouseY);
}
