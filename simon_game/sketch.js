var page = 0; //call back to original page 
var button;

var displacement = 25;


function setup() {
  createCanvas(800, 800);
  background(235);
  noStroke();
  squares();

  
  button = createButton("Start Game");
 // button.mousePressed(startSequence);

}

function draw() {
  
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
  //if(mouseX > width/2 + displacement)
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