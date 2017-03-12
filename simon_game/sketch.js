/* Name: Sam Kim & Josh Baker
   Description: Final project. Simon memory skill game.
   Last edited: 03/12/2017

*/
var page = 0; //call back to original page 
var displacement = 25;
var blinkSequence = [0, 1, 2, 3, 0, 1, 2, 3];
var delay = 1000; // 1 second (in milliseconds)

function setup() {
  createCanvas(800, 800);
  background(235);
  noStroke();
  textSize(40);
}  

// 
function draw() {
 background(235); 
 if (page == 0) {  // displays start game page
      text('Click to Start', 250, height/2);
  } else { // if page !0 then switches to game screen
      squares();
      //startBlinks();
      
  }
  
}
// changes between screens ----------------------------------------------
function mousePressed() {
  page = 1;
}


// draws colored squares of Simon game ----------------------------------
function squares() {
   redSquare();
   blueSquare();
   yellowSquare();
   greenSquare();
  
}

// defines individual colored sqares -------------------------------------
function redSquare() {
  if (mouseX >= 425 && mouseX <= 775 && mouseY <= 375 && mouseY >= 25 && mouseIsPressed) {
    fill(255,128, 128);
  } else {
    fill(250, 0, 15);
  }
  rect(width/2 + displacement, displacement, 350, 350);
}

function blueSquare() {
  if(mouseX >= 425 && mouseX <= 775 && mouseY >= 425 && mouseY <= 775 && mouseIsPressed) {
    fill(128, 179, 255);
  } else {
    fill(0, 100, 205);
  }
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

function yellowSquare() {
  if(mouseX <= 375 && mouseX >= 25 && mouseY >= 425 && mouseY <= 775 && mouseIsPressed) {
    fill(255, 230, 128);
  } else {
    fill(235, 190, 0);
  }
  rect(displacement, height/2 + displacement, 350, 350);
}

function greenSquare() {
  if(mouseX <= 375 && mouseX >= 25 && mouseY <= 375 && mouseY >= 25 && mouseIsPressed) {
    fill(141, 211, 95);
  } else {
    fill(0, 200, 95);
  }
  rect(displacement, displacement, 350, 350);
}

// read values in flashSequence array -----------------------------------
function startBlinks() {
  for (var i = 0; i < blinkSequence.length; i++) {
  //blinkSequence[i] = i
    if(blinkSequence[i] === 0) {
      redBlink();
    } else if (blinkSequence[i] === 1) {
      blueBlink();
    } else if (blinkSequence[i] === 2) {
      yellowBlink();
    } else if (blinkSequence[i] === 3) {
      greenBlink();
    }
  }
}

// draws color "flash"---------------------------------------------------
function redBlink() {
  fill(255, 128, 128);
  rect(width/2 + displacement, displacement, 350, 350);
}

function blueBlink() {
  fill(128, 179, 255);
  rect(width/2 + displacement, height/2 + displacement, 350, 350);
}

function yellowBlink() {
  fill(255, 230, 128);
  rect(displacement, height/2 + displacement, 350, 350);
}

function greenBlink() {
  fill(141, 211, 95);
  rect(displacement, displacement, 350, 350);
}