
var headImage;
var customFont;
var rammetto;

function preload() {
  headImage = loadImage('head.png'); 
  rammetto = loadFont('assests/RammettoOne-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont(rammetto);
  textSize(55);
  textAlign(CENTER, CENTER);
  fill(0); 
  noStroke();
}

  
function draw() {
  background("#FDF6F6"); 
  let headWidth = 900;
  let headHeight = 700;
  let headX = (width - headWidth) / 2;
  let headY = height - headHeight;
  image(headImage, headX, headY, headWidth, headHeight);
} 
 
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

