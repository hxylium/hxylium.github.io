// Conneced Nodes OOP Demo
// Hyder Shahzaib Ahmed
// 11/16/23

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let point of points){
    point.connectTo(points);
  }
  for (let point of points){
    point.update();
    point.display();
  }
}

function mousePressed(){
  let thePoint = new MovingPoint(mouseX, mouseY);
  points.push(thePoint);
}

class MovingPoint {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.r = 15;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.reach = 150;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.r*2);
  }

  update(){
    // Move
    let dx = noise(this.xTime);
    this.dx = map(dx, 0, 1, -5, 5);
    let dy = noise(this.yTime);
    this.dy = map(dy, 0, 1, -5, 5);

    this.x += this.dx;
    this.y += this.dy;

    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
    
    // Wrap around screen
    if (this.x < 0){
      this.x = width;
    }
    if (this.x > width){
      this.x = 0;
    }
    if (this.y < 0){
      this.y = height;
    }
    if (this.y > height){
      this.y = 0;
    }

    // Adjust size based on mouse
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.reach){
      // Make the circle bigger
      let theSize = map(d, 0, this.reach, 30, 15);
      this.r = theSize;
    }
    else{
      // Set circle to regular size
      this.r = 15;
    }

  }

  connectTo(pointsArray){
    for (let otherPoint of pointsArray){
      if (this !== otherPoint){
        if (dist(this.x, this.y, otherPoint.x, otherPoint.y,) < this.reach){
          stroke(this.color);
          line(this.x, this.y, otherPoint.x, otherPoint.y);
        }
      }
    }
  }
}