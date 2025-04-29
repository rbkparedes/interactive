
var headImage;
var customFont;
var rammetto;
var flickerTimer = 0;
var flickerDelay = 120;
var phrases = ["UMMMM", "SO CHILL", "LIKE SO CHILL", "I DON'T EVEN KNOW", "I'M JUST LIKE BRUH", "IT'S GOING FOR SURE", "GOOD QUESTION"];
var phrasePool = [];
var currentPhrase = "";
var finishedFlickering = false;


function preload() {
  headImage = loadImage('head.png'); 
  rammetto = loadFont('assests/RammettoOne-Regular.ttf');
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#FDF6F6"); 
  textFont(rammetto);
  textSize(55);
  textAlign(CENTER, CENTER);
  fill(0); 
  noStroke();
  resetPhrasePool();
  
} 

function draw(){
  if (finishedFlickering) {
    goToNextPage();
    return;
  }
  if (flickerTimer > 0) {
    background(255); 
    fill(163, 209, 206); 
    textSize(80);
    textLeading(100);
    text(currentPhrase, width/2, height/2);
    flickerTimer--;
  } else {
    background("#FDF6F6"); 
  
  
  let headWidth = 900;
  let headHeight = 700;
  let headX = (width - headWidth) / 2;
  let headY = height - headHeight;
  image(headImage, headX, headY, headWidth, headHeight);
  fill(173,27,32,);
  textAlign(CENTER, CENTER); 
  textSize(80);
  textLeading(115);  
  text("WHAT'S REALLY\n GOING ON?", width/2, height/2);
  }
   flickerDelay--;
    if (flickerDelay <= 0) {
      triggerFlicker();
    }
  
}

function triggerFlicker() {
  flickerTimer = 30; 
  flickerDelay = int(100); 
  currentPhrase = random(phrases);
if (phrasePool.length === 0) {
    resetPhrasePool();
  }
  
  currentPhrase = phrasePool.pop(); 
}

function resetPhrasePool() {
  phrasePool = shuffle(phrases.slice());
}

function goToNextPage() {
  window.location.href = "../sketch1/index.html"; 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

