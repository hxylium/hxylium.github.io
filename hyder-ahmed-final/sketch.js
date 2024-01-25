// Final Exam
// Hyder Shahzaib Ahmed
// 1/25/2024
//
// Extra for Experts:
// - Added the bounce feature to the balls themselves as well
// - Added the ability to delete any ball by clicking on it
// - Random Colours and random sizes for the balls
// - Added the lines demo thing with random distance difference for each unique ball

class Ball {
  constructor(x, y, colour){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = random(20, 50);
    this.colour = colour;
    this.alpha = random(100, 300);
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
    if(this.x > width-this.radius || this.x-this.radius < 0){
      this.dx *= -1;
    }
    if(this.y > height-this.radius || this.y-this.radius < 0){
      this.dy *= -1;
    }

    for(let i=0; i<myBalls.length; i++){
      if(this !== myBalls[i]){
        if(dist(this.x, this.y, myBalls[i].x, myBalls[i].y) < this.radius+myBalls[i].radius){
          let tempdx = this.dx;
          let tempdy = this.dy;
          this.dx = myBalls[i].dx;
          this.dy = myBalls[i].dy;
          myBalls[i].dx = tempdx;
          myBalls[i].dy = tempdy;
        }
        if(dist(mouseX, mouseY, myBalls[i].x, myBalls[i].y) < myBalls[i].alpha){
          stroke("black");
          line(mouseX, mouseY, myBalls[i].x, myBalls[i].y);
        }
      }
    }
  }

  display(){
    fill(this.colour);
    noStroke();
    circle(this.x, this.y, this.radius*2);
}
}

let myBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<5; i++){
    myBalls.push(new Ball(random(width), random(height), color(random(255), random(255), random(255))));
  }
}

function draw() {
  background(220);
  for(let i=0; i<myBalls.length; i++){
    myBalls[i].move();
    myBalls[i].display();
  }
}

function keyPressed(){
  myBalls.push(new Ball(random(width), random(height), color(random(255), random(255), random(255))));
}

function mousePressed(){
  for(let i=0; i<myBalls.length; i++){
    if(dist(mouseX, mouseY, myBalls[i].x, myBalls[i].y) < myBalls[i].radius){
      myBalls.splice(i, 1);
    }
  }
}