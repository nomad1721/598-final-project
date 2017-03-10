var displacement = 25;
var darkRed = color(250, 0, 15);
var darkBlue = color(0, 100, 205)
var darkYellow = color(235, 190, 0);
var darkGreen = color(0, 200, 95);
var lightRed = color(255, 128, 128);
var lightBlue = color(128, 179, 255);
var lightYellow = color(255, 230, 128);
var lightGreen = color (141, 211, 95);

function setup() {
  createCanvas(800, 800);
  background(235);
  noStroke();
  Squares();
}

function draw() {
  
}



function Squares() {
   redSquare();
   blueSquare();
   yellowSquare();
   greenSquare();
}



function redSquare() {
  fill(darkRed);
  rect(width/2 + displacement, displacement, 350, 350);
  //if(mouseX > width/2 + displacement)
}

function blueSquare() {
  fill(darkBlue);
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

function yellowSquare() {
  fill(darkYellow);
  rect(displacement, height/2 + displacement, 350, 350);
}

function greenSquare() {
  fill(darkGreen);
  rect(displacement, displacement, 350, 350);
}