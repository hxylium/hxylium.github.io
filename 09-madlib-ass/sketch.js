// Object Notation
// Hyder Shahzaib Ahmed
// 10/19/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let submitButton, choiceButton;
let userChoice;
let verbIn, nounIn, adjectiveIn, uIn;
let blanks = {
  verb: "",
  noun: "",
  adjective: "",
  uChoice: "",
};
let vy, ny, ay;
let logo;

function preLoad(){
  logo = loadImage("mad.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  vy = 20;
  ny = 60;
  ay = 100;
  imageMode(CENTER);
}

function draw() {
  background(220);
  startScreen();
}

function startScreen(){
  image(logo, width/2, -200);
  textSize(30);
  textAlign(CENTER);
  text("Welcome to a basic madlib game!", width/2, height/3);
  text("Select whether you would like a randomized madlib", width/2, height/3+30);
  text("OR", width/2, height/3+60);
}

function createUIn(){
  // Creating User inputs
  // User input for the verbs
  verbIn = createInput();
  verbIn.position(20, vy);

  // User input for nouns
  nounIn = createInput();
  nounIn.position(20, ny);

  // User input for adjectives
  adjectiveIn = createInput();
  adjectiveIn.position(20, ay);

  // Creating a button that once clicked saves whatever is in the input fields above
  // Create a submit button
  submitButton = createButton("Submit");
  submitButton.position(20, ay+40);
  submitButton.mousePressed(processInput);
}

function processInput(){
  // when the submit btton is clicked the following objects saves the user inputs
  blanks.verb = verbIn.value();
  blanks.noun = nounIn.value();
  blanks.adjective = adjectiveIn.value();

  endScreen();
}

function processChoiceIn(){
  // Saving the user choice
  blanks.uChoice = uIn.value();

  // Hiding the buttons once values are stored
  choiceButton.hide();
  uIn.hide();
}

function endScreen(){
  verbIn.hide();
  nounIn.hide();
  adjectiveIn.hide();
  submitButton.hide();
}

function sendChoice(){
  // Providing a field and button to actually submit
  // Create a field for the user to input text
  uIn = createInput();
  uIn.size(80, 20);
  uIn.position(width/2-40, height/2);
  
  // Create a submit button
  choiceButton = createButton("Submit");
  choiceButton.size(60, 26);
  choiceButton.position(width/2-30, height/2+50);
  choiceButton.mousePressed(processChoiceIn);
}

function choices(){
  textSize(30);
  textAlign(CENTER);
  text("What would you like to choose from the", width/2, height/6);
  text("bottom two choices?", width/2, height/6+32);
  textSize(18);
  text("Please input 0 or 1", width/2, height/6+60);
  
  // Showing the choices
  textSize(26);
  text("0: Anna's Gardma's house", width/2, height/3+40);
  text("1: The World", width/2, height/3+80);
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