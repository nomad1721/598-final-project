var displacement = 25;

function setup() {
  createCanvas(800, 800);
  background(235);
  noStroke();
}

function draw() {
  squares();
}



function squares() {
   redSquare();
   blueSquare();
   yellowSquare();
   greenSquare();
}



function redSquare() {
  fill(250, 0, 15);
  rect(width/2 + displacement, displacement, 350, 350);
}

function blueSquare() {
  fill(0, 100, 205);
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

function yellowSquare() {
  fill(235, 190, 0);
  rect(displacement, height/2 + displacement, 350, 350);
}

function greenSquare() {
  fill(0, 200, 95);
  rect(displacement, displacement, 350, 350);
}