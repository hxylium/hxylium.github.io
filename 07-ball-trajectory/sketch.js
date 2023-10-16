// 2nd Assignment/Bullet Trajectory System
// Hyder Shahzaib Ahmed
// 10/13/2023
//
// Extra for Experts:
// Learned to go above and beyond just arrays and used constructors and specified the bullet its own properties

const dx = 12;

let dy;
let x;
let y;
let shoot;
let enter;
let t;
let bullet;
let bulletArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/3;
  y = height-height/3;
  dy = -25;
  shoot = false;
  enter = 13;
  t = millis();
  spawnBullet();
}

function draw() {
  background(220);

  if (keyIsDown(enter)){
    shoot = true;
  }

  if (millis() - t >= 2000){
    shoot = false;
    t = millis();
  }

  if (shoot){
    for (let theBullet of bulletArray){
      theBullet.x = x;
      theBullet.y = y;
      circle(theBullet.x, theBullet.y, 50);
    }
    console.log(shoot);
  }
  console.log(shoot);
}

function spawnBullet(){
  let bullet = {
    bx: x,
    by: y,
  };
  bulletArray.push(bullet);
}