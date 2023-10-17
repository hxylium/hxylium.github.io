// Images and Sounds demo
// Hyder Shahzaib Ahmed
// 10/17/2023

let bb;
let coin;
let back;

function preload(){
  bb = loadImage("basketball.png");
  coin = loadSound("coin.mp3");
  back = loadSound("backgroundSound.mp3");

  back.setVolume(0.16);
  coin.setVolume(1);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(bb, mouseX, mouseY, 100, 100);
  // circle(mouseX, mouseY, 50);
}

function mousePressed(){
  if (!back.isPlaying()){
    back.loop();
  }
  coin.play();
}