// Ball Object Notation Demo
// Hyder Shahzaib Ahmed
// 10/5/2023

let theBall = {
  x: 100,
  y: 100,
  d: 25,
  r: 255,
  g: 0,
  b: 0,
  dx: 4,
  dy: 3,
};


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayBall();
  moveBall();
}

function displayBall(){
  fill(theBall.r, theBall.g, theBall.b);
  circle(theBall.x, theBall.y, theBall.d*2);
}

function moveBall(){
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;

  if (theBall.x > width){
    theBall.x = 0 - theBall.d;
  }

  if(theBall.y > height){
    theBall.y = 0 - theBall.d;
  }

  if (theBall.x < 0){
    theBall.x = 0 - theBall.d;
  }

  if(theBall.y < 0){
    theBall.y = 0 - theBall.d;
  }
}