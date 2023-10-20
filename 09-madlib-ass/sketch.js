// Object Notation
// Hyder Shahzaib Ahmed
// 10/19/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let submitButton, zeroButton, oneButton;
let userChoice;
let verbIn, nounIn, adjectiveIn, uIn;
let blanks = {
  verb: "",
  noun: "",
  adjective: "",
  madlib: "",
};
let i;
let vy, ny, ay;
let logo;
let gameState = "Initialize";

function preload(){
  logo = loadImage("mad.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  vy = 20;
  ny = 60;
  ay = 100;
  preload();
  initialize();
}


function draw() {
  background(220);
  image(logo, width/2, logo.height/6, logo.width/3, logo.height/4);
  
  choices();  
  takeIn();
  showMadlib();
}

function choices(){
  if (gameState === "Initialize"){
    text("OR", width/2-10, height/3+100);
    textSize(20);
  
    if (gameState === "Initialize"){
      zeroButton.show();
      oneButton.show();
    }
  
    zeroButton.mousePressed(function() {
      gameState = "playing";
      zeroButton.hide();
      oneButton.hide();
      i = 0;
      takeIn();
    });
    oneButton.mousePressed(function() {
      gameState = "playing";
      zeroButton.hide();
      oneButton.hide();
      i = 1;
      takeIn();
    });
  }
}

function takeIn(){
  if (gameState === "playing"){
    verbIn.show();
    nounIn.show();
    adjectiveIn.show();
    submitButton.show();
    gameState = "entering";
  }

  if (gameState === "entering"){
    textSize(20);
    textAlign(LEFT);
    text("Enter a verb below: ", width/2-width/2/2, height/4-10);
    text("Enter a noun below: ", width/2-width/2/2, height/4+70);
    text("Enter a adjective below: ", width/2-width/2/2, height/4+150);
    submitButton.mousePressed(end);
    textAlign(CENTER);
  }
}

function end(){
  verbIn.hide();
  nounIn.hide();
  adjectiveIn.hide();
  submitButton.hide();
  // when the submit button is clicked the following objects saves the user inputs
  blanks.verb = verbIn.value();
  blanks.noun = nounIn.value();
  blanks.adjective = adjectiveIn.value();
  blanks.madlib = generateMadlib(i);
  gameState = "showMadlib";
}

function showMadlib(){
  if (gameState === "showMadlib"){
    textSize(18);
    fill(140, 140, 140);
    noStroke();
    rect(width/2-width/1.2/2, height/2-height/2/2, width/1.2, height/1.5);
    fill("white");
    text(blanks.madlib, width/2-width/1.2/2, height/1.8/2, width/1.2, height/1.4);
    fill("black");

    let restartButton = createButton("Restart");
    restartButton.position(width/6, height-40);
    restartButton.size(width/6, 20);
    restartButton.style("background-color", "red");
    restartButton.mousePressed(function() {
      gameState = "Initialize";
    });
  }
}

function initialize(){
  imageMode(CENTER);
  textAlign(CENTER);

  zeroButton = createButton("0: Anna's Gardma's house");
  zeroButton.position(width/2-(width/2)/2, height/3);
  zeroButton.size(width/2, 60);
  zeroButton.style('background-color', 'red');
  // zeroButton.mousePressed(processInput(0));
  
  oneButton = createButton("1: The World");
  oneButton.position(width/2-(width/2)/2, height/3+120);
  oneButton.size(width/2, 60);
  oneButton.style('background-color', 'blue');
  // oneButton.mousePressed(processInput(1));

  // Creating a button that once clicked saves whatever is in the input fields above
  // Create a submit button
  submitButton = createButton("Submit");
  submitButton.position(width/2-(width/5)/2, height-(height/4));
  submitButton.size(width/5, 30);
  submitButton.style('background-color', 'green');
  // submitButton.mousePressed(processInput);

  // Creating User inputs
  // User input for the verbs
  verbIn = createInput();
  verbIn.position(width/2-(width/2)/2, height/4);
  verbIn.size(width/2, 30);

  // User input for nouns
  nounIn = createInput();
  nounIn.position(width/2-(width/2)/2, height/4+80);
  nounIn.size(width/2, 30);

  // User input for adjectives
  adjectiveIn = createInput();
  adjectiveIn.position(width/2-(width/2)/2, height/4+160);
  adjectiveIn.size(width/2, 30);

  // zeroButton.hide();
  // oneButton.hide();
  submitButton.hide();
  verbIn.hide();
  nounIn.hide();
  adjectiveIn.hide();
  
}

function generateMadlib(i){
  return [`Anna was visiting Grandma's house and decided to ${blanks.verb} in the 
  attic while grandma ${blanks.verb} lunch. There were many ${blanks.verb} things 
  for her to see. Just then she heard someone ${blanks.verb} the staircase. She became 
  frightened, saw a ${blanks.adjective} trunk and opened it to hide inside. She climbed 
  inside and pulled the trunk shut at which time she plunged through a trap door that was 
  inside the trunk. She landed in a place that was out doors where there were all different 
  kinds of trees, colorful flowers, birds and other animals of all shapes and sizes. But there 
  was something ${blanks.verb} different about the animals - they talked! Anna had so much fun 
  ${blanks.verb} with all the talking animals, however, she soon became tired and hungry and 
  wanted to go back home for some of grandmas good cooking. She climbed a tree to ask the wise 
  owl how to get back home and just when she was about to speak she fell from the tree and hit 
  her head. When she awoke she was back in the trunk in Grandma's attic. The End.`
  ,
  `People all over the ${blanks.noun} have been trying to figure out how the world came to be. 
  One ${blanks.noun} is that God ${blanks.verb} the world and everything that's on it. Another 
  is that life is just a ${blanks.adjective} dream and when we die, we will wake up in another 
  world somewhere else. A ${blanks.adjective} theory would be that we are just someone else's 
  dream and the ${blanks.noun} will ${blanks.verb} when they wake up. Which ${blanks.noun} do 
  You believe?`][i];
}

// Resizes the Window according to the window size
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  oneButton.position(width/2-(width/2)/2, height/3+120);
  zeroButton.position(width/2-(width/2)/2, height/3);
  verbIn.position(width/2-(width/2)/2, height/4);
  verbIn.size(width/2, 30);
  nounIn.position(width/2-(width/2)/2, height/4+80);
  nounIn.size(width/2, 30);
  adjectiveIn.position(width/2-(width/2)/2, height/4+160);
  adjectiveIn.size(width/2, 30);
  submitButton.position(width/2-(width/5)/2, height-(height/4));
  submitButton.size(width/5, 30);
}