// Perlin Noise Ball
// Hyder Shahzaib Ahmed
// 10/12/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall();
  background("white");
  // spawning a new ball half the second
  window.setInterval(spawnBall, 699);
}

function draw() {
  noStroke();

  for (let theBall of ballArray) {
    fill(theBall.color);
    // move
    theBall.x = noise(theBall.time)*width;
    theBall.y = noise(theBall.time+theBall.yOffset)*height;
  
    // display
    circle(theBall.x, theBall.y, theBall.size);
  
    theBall.time += 0.01;
  }

}

function mousePressed(){
  spawnBall();
}

function spawnBall(){
  let ball = {
    x: random(width),
    y: random(height),
    size: random(10, 50),
    color: color(random(255), random(255), random(255), random(255)),
    time: random(0, 1000),
    yOffset: random(1000),
  };
  ballArray.push(ball);
}