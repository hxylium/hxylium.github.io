// Fireworks OOP Demo
// Hyder Shahzaib Ahmed
// 11/20/23

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let i = theFireworks.length-1; i >= 0; i--) {
    let particle = theFireworks[i];
    particle.update();
    if (particle.isDead()){
      theFireworks.splice(i, 1);
    }
    else{
      particle.display();
    }
  }
}

function mousePressed(){
  for (let i=0; i<100; i++){
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    theFireworks.push(new Particle(mouseX, mouseY, dx, dy));
  }
}

class Particle{
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
    this.rad = 6;
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.rad*2);
  }

  update(){
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 2;
  }

  isDead(){
    return this.alpha <= 0;
  }
}