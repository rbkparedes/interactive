var phrases = [];
var shownPhrases = [];
var headImage;
var customFont;
var rammetto;

function preload() {
  rammetto = loadFont('RammettoOne-Regular.ttf');
}

function preload() {
  headImage = loadImage('head.png'); 
}


function setup() {
  createCanvas(600,600);
  // textFont(rammetto);
  textSize(28);
  textAlign(CENTER, CENTER);
  fill(0); // black text
  noStroke();

  // Now that width/height are defined, we can use them
  phrases = [
    { text: "AHHHHHHH", x: 200, y: 100 },
    { text: "LALALALALA", x: 300, y: 160 },
    { text: "WHAT’S HAPPENING?!", x: 600, y: 220 },
    { text: "I’M LITERALLY FINE", x: 900, y: 100 },
    { text: "NEED A SWEET TREAT", x: 200, y: 300 },
    { text: "GENUINELY LIKE WHAT?", x: 800, y: 300 },
    { text: "I DON’T KNOW I DON’T KNOW I DON’T KNOW", x: width / 2, y: 380 },
    { text: "GUYS I’M SCARED", x: 300, y: 450 },
    { text: "I\nG\nR\nA\nD\nU\nA\nT\nE\nIN\nA\nM\nO\nN\nT\nH!", x: 100, y: 100 },
    { text: "AHHHHHHH", x: 1000, y: 180 },
    { text: "HUH?!?!?!", x: 1100, y: 240 },
    { text: "WE ARE LIVING IN HELL", x: 700, y: 500 },
    { text: "TENGO MIEDO TENGO MIEDO TENGO MIEDO", x: width / 2, y: 600 },
    { text: "I DON’T KNOW WHAT I’M DOING WITH MY LIFE", x: width / 2, y: 680 },
    { text: "GIRL WHAT", x: 300, y: 750 },
    { text: "IT’S FINE IT’S FINE IT'S FINE", x: 1000, y: 720 }
  ];
}

function draw() {
  background("#FDF6F6");
  let headWidth = 600;
  let headHeight = 500;
  let headX = (width - headWidth) / 2;
  let headY = height - headHeight;
  image(headImage, headX, headY, headWidth, headHeight);

  for (let i = 0; i < shownPhrases.length; i++) {
    let phrase = shownPhrases[i];

    let x = phrase.x + random(-2, 2);
    let y = phrase.y + random(-2, 2);

    let lines = phrase.text.split("\n");
    for (let j = 0; j < lines.length; j++) {
      text(lines[j], x, y + j * 30);
    }
  }
}

function mousePressed() {
  if (shownPhrases.length < phrases.length) {
    shownPhrases.push(phrases[shownPhrases.length]);
  }
}
