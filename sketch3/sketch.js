
var headImage;
var customFont;
var rammetto;
var b = [];
var colors = [];
var showGIF = true;
var gifImage;
var images= [];
var imageFiles = ["gatito.png","cherryblossom.png","estickers.png","chilaquil.png","swan.png","calcetines.png","tecito.png","fresas.png","converse.png","iced.png","gatito.png" ];
var clickedCount = 0;
var showIntroText = true;

let headWidth = 1000;
let headHeight = 700;
let headX, headY, headCenterX, headTopY;


function preload() {
  headImage = loadImage('cabezaabierta2.png'); 
  rammetto = loadFont('assests/RammettoOne-Regular.ttf');
  gifImage = loadImage("cabeza.gif");
  
   for (let i = 0; i < imageFiles.length; i++) {
    images.push(loadImage(imageFiles[i]));
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//   setTimeout(() => {
//   showGIF = false;
// }, 600);
  setTimeout(() => {
  showIntroText = false;
}, 2000);
  textFont(rammetto);
  textSize(55);
  textAlign(CENTER, CENTER);
  noStroke();
  imageMode(CENTER);

  colors = [
    "#B03547", "#A3D1CE", "#A1AF5D", "#010101", "#C0A3C0", "#D1636C"
  ];

   headX = width / 2;
  headY = height - headHeight / 2;
  headCenterX = headX;
  headTopY = headY - headHeight / 2 + 120;

  for (let i = 0; i < 25; i++) {
    b[i] = new Ball(
      headCenterX + random(-50, 50),
      headTopY + random(-20, 20),
      random(80,100));
  }
}

  function draw() {
  // if (showGIF) {
  //   background(255);
  //   imageMode(CENTER);
  //   image(gifImage, headX, headY, headWidth, headHeight);
  //   return; 
  // }
  
  background("#FDF6F6");  
  image(headImage, headX, headY, headWidth, headHeight);
  if (showIntroText) {
    fill("#A1AF5D");
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Click on the balls to\n see what's going on", width / 2, height / 2);
    return;}

  for (let i = 0; i < b.length; i++) {
    b[i].move();
    b[i].bounce();
    b[i].display();
  }

  if (clickedCount >= 10) {
    fill("#AD1B20");
    textSize(64);
    textAlign(CENTER, CENTER);
    text("WHAT'S REALLY\n GOING ON", width / 2, height / 2);
  }
}

function mousePressed() {
  for (let i = 0; i < b.length; i++) {
    b[i].clicked(mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Ball {
  constructor(tempX, tempY, diam) {
    this.x = tempX;
    this.y = tempY;
    this.xspeed = random(2, 6);
    this.yspeed = random(-8, -2);
    this.d = diam;
    this.c = random(colors);
    this.clickedOnce = false;
    this.img = null;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed *= -1;
    }
  }

  display() {
    if (this.clickedOnce && this.img) {
      image(this.img, this.x, this.y, this.d, this.d);
    } else {
      fill(this.c);
      noStroke();
      ellipse(this.x, this.y, this.d);
    }
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.d / 2 && !this.clickedOnce) {
      this.img = random(images);
      this.clickedOnce = true;
      clickedCount++;
    }
  }
}