// Ball Bouncing OOP
// Hyder Shahzaib Ahmed
// 11/15/23

class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = random(15, 30);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
  }

  moveBall(){
    this.x += this.dx;
    this.y += this.dy;
  }

  display(){
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.size*2);
  }

  bounceBall(){
    if(this.x >= width || this.x <= 0){
      this.dx = -this.dx;
    }
    if(this.y >= height || this.y <= 0){
      this.dy = -this.dy;
    }
  }

  bounceAgainstAnotherBall(){
    for(let someBall of ballArray){
      if(this !== someBall){
        let d = dist(this.x, this.y, someBall.x, someBall.y);
        let combinedR = this.size + someBall.size;
        if(d < combinedR){
          this.dx = -this.dx;
          this.dy = -this.dy;
          someBall.dx = -someBall.dx;
          someBall.dy = -someBall.dy;
        }
      }
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  for(let someBall of ballArray){
    someBall.bounceBall();
    someBall.moveBall();
    someBall.display();
    someBall.bounceAgainstAnotherBall();
  }
  autoClicker();
}

function mousePressed(){
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}

function autoClicker(){
  if (key === " "){
    let theBall = new Ball(mouseX, mouseY);
    ballArray.push(theBall);
  }
  if (key === "s"){
    ballArray.splice(0, 1);
  }
}