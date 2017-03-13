/* Name: Sam Kim & Josh Baker
   Description: Final project. Simon memory skill game.
   Last edited: 03/12/2017

*/
var page = 0; //call back to original page 
var displacement = 25;
var time = 0;
var blinkSequence = [blinkRedSquare,blinkBlueSquare, blinkGreenSquare, blinkYellowSquare];
var timeValues = [15, 45, 75, 105];

function setup() {
  createCanvas(800, 800);
  background(235);
  noStroke();
  textSize(40);
  shuffle(blinkSequence, true);
}  

function draw() {
 background(235); 
 if (page == 0) {  // displays start game page
      text('Click to Start', 250, height/2);
  } else { // if page !0 then switches to game screen
      startGame();
  }
  
}
// changes between screens 
function mousePressed() {
  page = 1;
}

function squares() {
   redSquare();
   blueSquare();
   yellowSquare();
   greenSquare();
}

function startGame() {
for (i = 0; i < blinkSequence.length; i++) {
    blinkSequence[i](timeValues[i], timeValues[i] + 15);
  }
  time = time + 1;
}

//BLINKING SQUARES
function blinkRedSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(250, 0, 15);    
  } else if (time < timeEnd) {
    fill(255,128,128);
  }
  rect(width/2 + displacement, displacement, 350, 350);
}

function blinkBlueSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(0, 100, 205);  
  } else if (time < timeEnd) {
    fill(128, 179, 255);
  }
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

function blinkYellowSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(255, 230, 128);   
  } else if (time < timeEnd) {
    fill(235, 190, 0);
  }
  rect(displacement, height/2 + displacement, 350, 350);
}

function blinkGreenSquare(timeStart, timeEnd) {
  if (time < timeStart || time > timeEnd) {
    fill(0, 200, 95);
  } else if (time < timeEnd) {
    fill(124,252,0);
  }
  rect(displacement, displacement, 350, 350);
}


//Player input mode
function redSquare() {
  noStroke();
  if (mouseX >= 425 && mouseX <= 775 && mouseY <= 375 && mouseY >= 25 && mouseIsPressed) {
    fill(255,128,128);
  } else {
    fill(250, 0, 15);
  }
  rect(width/2 + displacement, displacement, 350, 350);
}

function blueSquare() {
  noStroke();
  if(mouseX >= 425 && mouseX <= 775 && mouseY >= 425 && mouseY <= 775 && mouseIsPressed) {
    fill(128, 179, 255);
  } else {
    fill(0, 100, 205);
  }
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

function yellowSquare() {
  noStroke();
  if(mouseX <= 375 && mouseX >= 25 && mouseY >= 425 && mouseY <= 775 && mouseIsPressed) {
    fill(255, 230, 128);
  } else {
    fill(235, 190, 0);
  }
  rect(displacement, height/2 + displacement, 350, 350);
}

function greenSquare() {
  noStroke();
  if(mouseX <= 375 && mouseX >= 25 && mouseY <= 375 && mouseY >= 25 && mouseIsPressed) {
    fill(124,252,0);
  } else {
    fill(0,200,95);
  }
  rect(displacement, displacement, 350, 350);
}