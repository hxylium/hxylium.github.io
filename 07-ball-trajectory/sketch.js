let engine;
let world;

let cannonball;

function setup() {
  createCanvas(800, 400);
  engine = Matter.Engine.create();
  world = engine.world;

  let ground = Matter.Bodies.rectangle(width / 2, height, width, 10, { isStatic: true });
  Matter.World.add(world, ground);

  cannonball = Matter.Bodies.circle(50, height - 20, 10);
  Matter.World.add(world, cannonball);
}

function draw() {
  // background(220);

  let gravityForce = { x: 0, y: 0.0005 };
  Matter.Body.applyForce(cannonball, cannonball.position, gravityForce);

  Matter.Engine.update(engine);

  fill(0);
  let pos = cannonball.position;
  circle(pos.x, pos.y, 20);

  if (pos.x > width || pos.y > height) {
    // Reset the position
    Matter.Body.setPosition(cannonball, { x: 50, y: height - 20 });
    Matter.Body.setVelocity(cannonball, { x: 0, y: 0 });
  }
}

function keyPressed() {
  if (key === ' ' && cannonball.speed < 1) {
    let force = Matter.Vector.create(0.02, -0.019);
    Matter.Body.applyForce(cannonball, cannonball.position, force);
  }
}