// Create a Matter.js engine and world
let engine;
let world;

// Create a cannonball object
let cannonball;

function setup() {
  createCanvas(800, 400);
  engine = Matter.Engine.create();
  world = engine.world;

  // Create the ground
  let ground = Matter.Bodies.rectangle(width / 2, height, width, 10, { isStatic: true });
  Matter.World.add(world, ground);

  // Create the cannonball
  cannonball = Matter.Bodies.circle(50, height - 20, 10);
  Matter.World.add(world, cannonball);
}

function draw() {
  background(220);

  // Apply gravity to the cannonball
  let gravityForce = { x: 0, y: 0.1 }; // Stronger gravity effect
  Matter.Body.applyForce(cannonball, cannonball.position, gravityForce);

  // Update the Matter.js engine
  Matter.Engine.update(engine);

  // Display the cannonball
  fill(0);
  let pos = cannonball.position;
  circle(pos.x, pos.y, 20);

  // Check if the cannonball goes off-screen
  if (pos.x > width || pos.y > height) {
    // Reset the position
    Matter.Body.setPosition(cannonball, { x: 50, y: height - 20 });
    Matter.Body.setVelocity(cannonball, { x: 0, y: 0 });
  }
}

function keyPressed() {
  if (key === ' ' && cannonball.speed < 1) {
    // Apply an initial velocity to simulate shooting
    let force = Matter.Vector.create(0.1, -0.3); // Adjust the values for the desired trajectory
    Matter.Body.applyForce(cannonball, cannonball.position, force);
  }
}