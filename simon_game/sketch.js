var page = 0; //call back to original page 


var displacement = 25;


function setup() {
  createCanvas(800, 800);
  //restartSequence();
  background(235);
  noStroke();
  textSize(40);
}  


function draw() {
 background(235); 
 if (page == 0) {  // start game page
      text('Click to Start', 250, height/2);
  } else { // if page !0 then switches to game screen
      squares();
      if
  }
  
}
// changes between animations ------------------------------
function mousePressed() {
  page = 1;
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