var page = 0; //call back to original page 
var displacement = 25;


function setup() {
  createCanvas(800, 800);
  background(235);
  noStroke();
  textSize(40);
}  


function draw() {
 background(235); 
 if (page == 0) {  // displays start game page
      text('Click to Start', 250, height/2);
  } else { // if page !0 then switches to game screen
      squares();
    
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