// Name: Hyder Shahzaib Ahmed
// CS 30
// First Assignment: Interactive Scene
// Final Project V0
// Game description: The idea was given from a good friend I knew in Pakistan as I was stil wondering on what to do, so that I could carry on the project into my final project, I decided to do flappy bird but then saw someone had already done it so I went with his idea of making a tank game, I used the idea from the tank game available on the App store and Play store as a basic guide. Its basically a multiplayer shooting tank game where the person with the most damage dealt loses.
// Extra for experts: I took a different aproach to how I could use extra for experts, I am a Logic person so my extra for experts is the use of 2d Arrays, the arrays stored data, and continuously pushes, edits and changes the trajectory of the bullet which is something we did not do in class and I had to find my own ways to implement the theory into practicality which led to a whole day of theory testing and debugging. Another is using the millis() function to compensate for the lack of a delay funtion, I have read p5js has a delay function but I simply could not access it or was able to use it. And finally my last extra for experts is the use of text features built into p5js, things like resizing text, changing fonts, and aligning them were all new to me and I explored them in depth. 
// I also have many many ideas on how to make this better, but I was really busy with other school work that I could really just put in about 2 days of effort, things like sounds, gravity effect, parabolas, quadratics, levels, hills etc are some my current ideas for this project that would make it much better, another idea of mine is to have player score data saved.

// Declare variables to store game state and player information
let x, x2;           // Tank X-axis positions for Player 1 and Player 2
let y;               // Tank Y-axis position
let Pw, Pl, ps, Pw2, Pl2, ps2;
let dx, dy;          // Bullet movement speed in X and Y directions
let btx, bty;
let t, t1, t3, t4;   // Time variables
let rw, rl;           // Variables for game boundaries
let bx, by, bx2, by2;           // Bullet positions for Player 1 and Player 2
let bd;              // Bullet diameter
let i, i2;           // Iteration variables for bullet trajectory
let len, len2;        // Length variables for bullet trajectory arrays
let shoot, shoot2;   // State variables to track shooting
let btx2, bty2; // Arrays to store bullet trajectories
let dx2, dy2;          // Bullet movement speed in X and Y directions
let w, a, s, d;      // Keycodes for player controls
let up, left, down, right; // Keycodes for player 2 controls
let shift, enter;    // Keycodes for special actions
let backg, startEnd; // Background and start/end screen images
let P1Img, P2Img;    // Tank images for Player 1 and Player 2
let gameState;       // Variable to track the current game state
let scoreP1, scoreP2; // Player 1 and Player 2 scores
let playButton;      // Image for the play button
let resetButton;     // Image for the reset button
let homeButton;      // Image for the home button
let controls;        // Image for the controls
let settings;        // Image for the settings

// Preload function to load images before the game starts
function preload(){
  P1Img = loadImage("tank_blue.png");
  P2Img = loadImage("tank_red.png");
  backg = loadImage("background.png");
  playButton = loadImage("play_button.png");
  resetButton = loadImage("reset.png");
  homeButton = loadImage("home_button.png");
  controls = loadImage("controls.png");
  settings = loadImage("settings.png");
  startEnd = loadImage("start_end.jpg");
}

// Setup function to initialize game variables and canvas
function setup() {
  createCanvas(1200, 700);
  // Initialize various game parameters
  ps = 0.26;
  Pw = P1Img.width * ps;
  Pl = P1Img.height * ps; 
  x = width/12; // Initial X-axis position for Player 1's tank
  x2 = width-x-Pw; // Initial X-axis position for Player 2's tank
  y = height-height/2.2; // Initial Y-axis position for both tanks
  scoreP1 = 1000; // Initialize Player 1's score
  scoreP2 = 1000; // Initialize Player 2's score
 
  // Player 1 System
  t = millis(); // Time diff for the Bullet Pos during Shot Path
  t1 = millis(); // Time diff for preDestiny of the bullet midway
  dx = 24; // Bullet X axis Speed
  dy = -25; // Bullet Y axis Speed
  bx = x+Pw-dx; // Bullet X axis Pos
  by = y*1.1; // Bullet Y axis Pos
  btx = [bx]; // Bullet X axis trajectory info
  bty = [by]; // Bullet Y axis trajectory info
  bd = 20; // Bullet Diameter
  i = 0; // Iterations for the Bullet trajectory
  len = bty.length; // Length of the Y axis Trajectory Array
  shoot = false; // State Variable for the game current state. playing or not
  
  // Player 2 System
  Pw2 = Pw/3-20;
  t3 = millis(); // Time diff for the Bullet Pos during Shot Path
  t4 = millis(); // Time diff for preDestiny of the bullet midway
  dx2 = 24; // Bullet X axis Speed
  dy2 = -25; // Bullet Y axis Speed
  bx2 = x2+Pw2-dx2; // Bullet X axis Pos
  by2 = y*1.1; // Bullet Y axis Pos
  btx2 = [bx2]; // Bullet X axis trajectory info
  bty2 = [by2]; // Bullet Y axis trajectory info
  i2 = 0; // Iterations for the Bullet trajectory
  len2 = bty2.length; // Length of the Y axis Trajectory Array
  shoot2 = false; // State Variable for the game current state. playing or not

  // Initialize player controls and game state
  w = 87;
  a = 65;
  s = 83;
  d = 68;
  up = 38;
  down = 40;
  left = 37;
  right = 39;
  enter = 13;
  shift = 16;
  gameState = "Initialize"; // Set the initial game state
}

// Draw function to update and render the game
function draw() {
  if (gameState === "Initialize"){
    initializing(); // Call the initialization function
  }
  
  if (gameState === "End"){
    endScreen(); // Call the end screen function
  }
  
  if (gameState === "Running"){
    // Game is running, update and render game elements
    image(backg, 0, 0, width, height);
    P1();
    trajectoryP1();
    P1move();
    P1shoot();    
    P2();
    P2move();
    trajectoryP2();
    P2shoot();
    hit();
    scoreBoard();
    
    // shows fps, did this for fun, has aboslutly no use, no reason, not properly implemented etc, just purely for fun.
    fill("white");
    textSize(26);
    text(Math.floor(frameRate()), 25, 25);
  }
}

// Function to render Player 1's tank
function P1(){
  image(P1Img, x, y, Pw, Pl);
}

// Function to render Player 2's tank
function P2(){
  image(P2Img, x2, y, Pw, Pl);
}

// Function to render Player 1's tank movment
function P1move(){
  // Moves Forward
  if (keyIsDown(d)){
    if (x <= width/2-Pw-11){
      x += 2;
      for (let j = 0; j <= len; j++){
        btx[j] += 2;
      }
    }
  }
  
  // Moves backward
  if (keyIsDown(a)){
    if (x >= 0){
      x -= 2;
      for (let j = 0; j <= len; j++ ){
        btx[j] -= 2;
      }
    }
  }
}

// Function to render Player 2's tank movment
function P2move(){
  // Moves Forward
  if (keyIsDown(left)){
    if (x2 >= width/2+11){
      x2 -= 2;
      for (let j = 0; j <= len2; j++){
        btx2[j] -= 2;
      }
    }
  }
  // Moves backward
  if (keyIsDown(right)){
    if (x2 <= width-Pw){
      x2 += 2;
      for (let j = 0; j <= len2; j++){
        btx2[j] += 2;
      }
    }
  }
}

// Function to update and render the trajectory of Player 1's bullets
function trajectoryP1(){
  while (bty[len-1] <= y+Pw-bd){
    len = bty.length;
    dy += 3; // Increase Y-axis speed of the bullet
    bx += dx; // Update X-axis position of the bullet
    by += dy; // Update Y-axis position of the bullet
    btx.push(bx); // Store X-axis trajectory information
    bty.push(by); // Store Y-axis trajectory information
  }
}

// Function to update and render the trajectory of Player 2's bullets
function trajectoryP2(){
  while (bty2[len2-1] <= y+Pw-bd){
    len2 = bty2.length;
    dy2 += 3; // Increase Y-axis speed of the bullet
    bx2 -= dx2; // Update X-axis position of the bullet
    by2 += dy2; // Update Y-axis position of the bullet
    btx2.push(bx2); // Store X-axis trajectory information
    bty2.push(by2); // Store Y-axis trajectory information
  }
}

// Function to handle Player 1 shooting
function P1shoot(){
  fill("orange");
  if (keyIsDown(shift)) {
    shoot = true;
  }
  
  if (i === len-1 && shoot) {
    shoot = false;
    t1 = millis();
    i = 0;
  }

  if (shoot){
    circle(btx[i], bty[i-1], bd);
  } // Render Player 1's bullet

  if (millis() - t >= 60 && i < len+1 && shoot) {
    i++;
    t = millis();
  }
  fill("white");
}

// Function to handle Player 2 shooting
function P2shoot(){
  fill("orange");
  if (keyIsDown(enter)) {
    shoot2 = true;
  }
  
  if (i2 === len2-1 && shoot2) {
    shoot2 = false;
    t4 = millis();
    i2 = 0;
  }

  if (shoot2){
    circle(btx2[i2], bty2[i2-1], bd);
  } // Render Player 2's bullet

  if (millis() - t3 >= 60 && i2 < len2+1 && shoot2) {
    i2++;
    t3 = millis();
  }
  fill("white");
}

// Function to detect bullet hits
function hit(){
  if (bty[i] <= y+Pl && bty[i] >= y+50 && btx[i] >= x2 &&  btx[i] <= x2+Pw && shoot && scoreP1 >= 0){
    scoreP1 -= 69;
    shoot = false;
    i = 0;
  }
  
  if (scoreP1 < 0){
    scoreP1 = 0;
    gameState = "End";
  }
  
  if (bty2[i2] <= y+Pl && bty2[i2] >= y+50 && btx2[i2] >= x &&  btx2[i2] <= x+Pw && shoot2 && scoreP2 >= 0){
    scoreP2 -= 69;
    shoot2 = false;
    i2 = 0;
  }
  
  if (scoreP2 < 0){
    scoreP2 = 0;
    gameState = "End";
  }
}

// Function to display the score board
function scoreBoard(){
  textSize(26);
  textAlign(CENTER);
  text("VS", width/2, 50);
  fill("blue");
  text("P1 HP:", width/3, 50);
  fill("red");
  text("P2 HP:", width-width/3, 50);
  textSize(42);
  fill("blue");
  text(scoreP2, width/3, 80);
  fill("red");
  text(scoreP1, width-width/3, 80);
}

// Function to display the initialization screen
function initializing(){  
  gameState = "Initialize";
  image(startEnd, 0, 0, width, height);
  image(playButton, width/2-200, height/3, 400, 200);
  image(settings, width/2-50, height/3+200, 100, 100);
  textFont('BankGothic Md BT');
  
  // Check for mouse click to transition to the running game state
  if (mouseIsPressed && mouseX >= width/2-200 && mouseX <= width/2+200 && mouseY >= height/3 && mouseY <= height/3+200){
    gameState = "Running";
  }
  
  // Check for mouse click to display controls
  if (mouseIsPressed && mouseX >= width/2-50 && mouseX <= width/2+50 && mouseY >= height/3+200 && mouseY <= height/3+300){
    image(controls, width/2-controls.width/2+100, 0);
  }
}

// Function to display the end screen
function endScreen(){
  image(startEnd, 0, 0, width, height);
  
  if (scoreP1 <= 0){
    textSize(69);
    textAlign(CENTER);
    fill("blue");
    text("The Winner is PLayer 1!", width/2, height/3);
  }
  
  if (scoreP2 <= 0){
    textSize(69);
    textAlign(CENTER);
    fill("red");
    text("The Winner is PLayer 2!", width/2, height/3);
  }
  
  image(resetButton, width/2-100, height-height/3-100, 200, 200);
  image(homeButton, 50, height-120, 100, 100);
  
  // Check for mouse click to reset the game
  if (mouseIsPressed && mouseX >= width/2-100 && mouseX <= width/2+100 && mouseY >= height-height/3-100 && mouseY <= height-height/3+100){
    gameState = "Running";
    scoreP1 = 1000;
    scoreP2 = 1000;
    x = width/12;
    x2 = width-x-Pw;
    y = height-height/2.2;
  }
  
  // Check for mouse click to return to the initialization screen
  if (mouseIsPressed && mouseX >= 50 && mouseX <= 50+100 && mouseY >= height-100 && mouseY <= height-30){
    gameState = "Initialize";
    scoreP1 = 1000;
    scoreP2 = 1000;
    x = width/12;
    x2 = width-x-Pw;
    y = height-height/2.2;
  }
}
