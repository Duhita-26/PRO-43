var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("treasure.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1030,530);
  security = new Security();
  system = new System();


  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  stroke(4)
  fill("white");
  text("SCORE : " + score, 450, 50);
// add code for changing the background to the treasure background

  if(score === 3) {
    clear()
    background(bg2)
    stroke(4)
    fill("black")
    textSize(40);
    text("TREASURE  UNLOCKED!!",270, 270);
  }

  drawSprites()
}