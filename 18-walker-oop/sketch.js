// Walker OOP Demo
// Hyder Shahzaib Ahmed
// 11/14/23

class Walker{
  constructor(x, y,  color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 6;
    this.size = 6;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move(){
    let theChoice = random(100);
    if(theChoice < 25){
      // Down
      this.y += this.speed;
    }
    else if(theChoice < 50){
      // Up
      this.y -= this.speed;
    }
    else if(theChoice < 75){
      // Left
      this.x -= this.speed;
    }
    else{
      // Right
      this.x += this.speed;
    }
  }
}

let gabe;
// let emma;
let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  gabe = new Walker(width/2, height/2, "blue");
  theWalkers.push(gabe);
  // emma = new Walker(200, 400, "red");
}

function draw() {
  // gabe.move();
  // gabe.display();

  // emma.move();
  // emma.display();

  for (let person of theWalkers){
    person.move();
    person.display();
  }
}

function mousePressed(){
  let gabe = new Walker(mouseX, mouseY, "blue");
  theWalkers.push(gabe);
}