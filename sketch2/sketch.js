/*
  Portions of this sketch were developed with assistance from ChatGPT (OpenAI).
  AI support was used specifically to:

  – Skip the mousePressed interaction and start the sketch in its final state
    Prompt: "i want this sketch to start from the part where the phrases are jittering and the balls are bouncing everywhere and there is text on top; basically i want to get rid of the beginning/mouse pressed function"

  – Make the balls look like they are bursting out of the head
    Prompt: "how do i make it look like the balls are coming out of the head"
Final design, direction, and customization by Rebecca Paredes.
*/

var phrases = [];
var shownPhrases = [];
var headImage;
var customFont;
var rammetto;
var showRedWords = false;
var allPhrasesExploded = false;
var flashTimer = 0;
var showText = true;
var showEllipse = false;
var b = [];
var colors = [];


function preload() {
  headImage = loadImage('cabezaabierta2.png'); 
  rammetto = loadFont('assests/RammettoOne-Regular.ttf');
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont(rammetto);
  textSize(55);
  textAlign(CENTER, CENTER);
  fill(0); 
  noStroke();
  
  colors = [
    "#B03547","#A3D1CE","#A1AF5D", "#010101", "#C0A3C0", "#D1636C"];
  
  phrases = [
    { text: "I'M CHILL I'M CHILL I'M LITERALLY CHILL I'M SO CHILL", 
  startX: 0.5, startY: 0.85, targetX: 0.5, targetY: 0.05, 
  size: 40, angle: 0, progress: 0 },
    { text: "AHHHHHHH", startX: 0.5, startY: 0.85, targetX: 0.45, targetY: 0.05, size: 45, angle: -20, progress: 0 },
    { text: "LALALALALA", startX: 0.5, startY: 0.85, targetX: 0.6, targetY: 0.08, size: 38, angle: 10, progress: 0 },
    { text: "WHAT’S HAPPENING?!", startX: 0.5, startY: 0.85, targetX: 0.5, targetY: 0.15, size: 48, angle: -5, progress: 0 },
    { text: "I’M LITERALLY FINE", startX: 0.5, startY: 0.85, targetX: 0.7, targetY: 0.18, size: 40, angle: 15, progress: 0 },
    { text: "GENUINELY LIKE WHAT?", startX: 0.5, startY: 0.85, targetX: 0.65, targetY: 0.28, size: 40, angle: 5, progress: 0 },
    { text: "I DON’T KNOW I DON’T KNOW I DON’T KNOW", startX: 0.5, startY: 0.85, targetX: 0.5, targetY: 0.38, size: 34, angle: 0, progress: 0 },
    { text: "GUYS I’M SCARED", startX: 0.5, startY: 0.85, targetX: 0.3, targetY: 0.42, size: 38, angle: -25, progress: 0 },
    { text: "I GRADUATE IN A MONTH!", startX: 0.5, startY: 0.85, targetX: 0.2, targetY: 0.5, size: 24, angle: 0, progress: 0 },
    { text: "AHHHHHHH", startX: 0.5, startY: 0.85, targetX: 0.65, targetY: 0.55, size: 45, angle: 5, progress: 0 },
    { text: "HUH?!?!?!", startX: 0.5, startY: 0.85, targetX: 0.5, targetY: 0.6, size: 42, angle: -5, progress: 0 },
    { text: "WE ARE LIVING IN HELL", startX: 0.5, startY: 0.85, targetX: 0.6, targetY: 0.68, size: 40, angle: 5, progress: 0 },
    { text: "TENGO MIEDO TENGO MIEDO TENGO MIEDO", startX: 0.5, startY: 0.85, targetX: 0.4, targetY: 0.75, size: 36, angle: -10, progress: 0 },
    { text: "I DON’T KNOW WHAT I’M DOING WITH MY LIFE", startX: 0.5, startY: 0.85, targetX: 0.5, targetY: 0.82, size: 38, angle: 0, progress: 0 },
    { text: "GIRL WHAT", startX: 0.5, startY: 0.85, targetX: 0.7, targetY: 0.9, size: 34, angle: 15, progress: 0 },
    { text: "TU PUEDES MEXICANA", 
  startX: 0.5, startY: 0.85, targetX: 0.7, targetY: 0.25, 
  size: 38, angle: 10, progress: 0 },
    { text: "ME VOY MATAR ES BROMIS ES BROMIS", 
  startX: 0.5, startY: 0.85, targetX: 0.4, targetY: 0.5, 
  size: 36, angle: -15, progress: 0 },
    { text: "IT’S FINE IT’S FINE", startX: 0.5, startY: 0.85, targetX: 0.35, targetY: 0.93, size: 34, angle: -10, progress: 0 }
  ];
  
  let headWidth = 900;
  let headHeight = 700;
  let headX = (width - headWidth) / 2;
  let headY = height - headHeight;
  let headCenterX = headX + headWidth / 2;
  let headTopY = headY + 120;
  
  for (let i = 0; i < 20; i++) {
    b[i] = new Ball(
      headCenterX + random(-50, 50),   
      headTopY + random(-20, 20),      
      random(80, 100)                      
    );
  }
 
  
  showText = false;
showEllipse = true;
showRedWords = true;

// Load all phrases into shownPhrases
for (let i = 0; i < phrases.length; i++) {
  let p = phrases[i];
  shownPhrases.push({
    text: p.text,
    startX: p.startX,
    startY: p.startY,
    targetX: p.targetX,
    targetY: p.targetY,
    size: p.size,
    angle: p.angle,
    progress: random(0.7, 1) 
  });
}
  
  
}

function draw() {
  if (flashTimer > 0) {
  flashTimer--;
} else {
  background("#FDF6F6"); 
}
  let headWidth = 900;
  let headHeight = 600;
  let headX = (width - headWidth) / 2;
  let headY = height - headHeight;
  image(headImage, headX, headY, headWidth, headHeight);
  
  // textAlign(CENTER, CENTER); 
  // textSize(75);
  // fill(161,175,93);
  // if (showText){
  //   text('Click on head', width/2, height/2);
  // }
  
  
  allPhrasesExploded = true;

  
  for (let phrase of shownPhrases) {
    push();
    textSize(phrase.size);
    textAlign(CENTER, CENTER);
    fill(0);

    // Animate movement
      if (phrase.progress < 1) {
    phrase.progress += 0.01;
    allPhrasesExploded = false;
  }

    // Calculate animated position
    let chaosMax = 0.05;
    let chaosAmount = chaosMax * phrase.progress;
    
let targetXChaos = phrase.targetX + random(-chaosAmount, chaosAmount);
let targetYChaos = phrase.targetY + random(-chaosAmount, chaosAmount);

let currentX = lerp(phrase.startX, targetXChaos, easeOut(phrase.progress)) * width;
let currentY = lerp(phrase.startY, targetYChaos, easeOut(phrase.progress)) * height;

    translate(currentX, currentY);
    rotate(radians(phrase.angle));

    // Add bounce and jitter
    let bounce = sin(phrase.progress * PI) * (1 - phrase.progress) * 10;
    let jitterX = random(-2, 2);
    let jitterY = random(-2, 2) - bounce;

    text(phrase.text, jitterX, jitterY);
    pop();
  }
  

  
  if(showEllipse){
    push();
    
    for (i = 0; i < 20; i++){
    b[i].move();
    b[i].bounce();
    b[i].display();
  }
  }
  
    if(showRedWords){
  push();
    
    
  fill(173,27,32);
  textAlign(CENTER, CENTER); 
  textSize(80);
  textLeading(115);  
  text("THERE IS NO GOING\n BACK", width/2, height/2);
  pop();
}
}

// function mousePressed() {
//   showText = false;
//   if (shownPhrases.length < phrases.length) {
//     let nextPhrase = phrases[shownPhrases.length]; 
//     shownPhrases.push({
//     text: nextPhrase.text,
//     startX: nextPhrase.startX,
//     startY: nextPhrase.startY,
//     targetX: nextPhrase.targetX,
//     targetY: nextPhrase.targetY,
//     size: nextPhrase.size,
//     angle: nextPhrase.angle,
//     progress: 0
//     });
    
//   }
//   else{
//     flashTimer = 8;
//     showEllipse = true;
//     showRedWords = true;
    
//   }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function easeOut(t) {
  return 1 - pow(1 - t, 3);
}

class Ball{
  
  //define the properties of the class
  constructor(tempX, tempY, diam){
    this.x = tempX;
    this.y = tempY; 
    this.xspeed = random(2, 6);
    this.yspeed = random(-8, 5); 
    this.d = diam;
    this.c = random(colors);
  }
  
  //make the functions/methods of my ball
  move(){
      this.x += this.xspeed; 
      this.y += this.yspeed;
  }
  
  bounce(){
    // bounce along the width
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }
    // bounce along the height
    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }
  
  display(){
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.d);
  }
}
