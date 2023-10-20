// Object Notation
// Hyder Shahzaib Ahmed
// 10/19/2023
//
// I only didn't put in much effort as a lot of my other projects were coming up and
// multiple competitions so i just quickly did this in about 2 hours
//
// Extra for Experts:
// - Buttons & Input fields(rather than using promt)
// - Using the function() feature to run buts of codes on command
// - WindowResized? No idea if this was taught or not but...
// - Using the objects as objects rather than calling the objects and storing it in a array

// Declare global variables for buttons, user input, and game state
let submitButton, zeroButton, oneButton;
let userChoice;
let verbIn, nounIn, adjectiveIn, uIn;
let blanks = {
  verb: "",
  noun: "",
  adjective: "",
};
let i;
let logo;
let gameState = "Initialize";
let madlib = [];

// Preloading the madlibg logo
function preload(){
  logo = loadImage("mad.png");
}

// Setup the canvas and call the initialization function
function setup() {
  createCanvas(windowWidth, windowHeight);
  preload(); // Only calling this function because for some reason it decided to not autocall?
  initialize();
  windowResized();
}

// Main drawing loop
function draw() {
  background(220);

  // Resizing the screen whenever neccesary
  windowResized();

  // Drawing the logo at the top
  image(logo, width/2, logo.height/6, logo.width/3, logo.height/4);
  
  // the following cuntions are called in the draw loop because they require text to be drawn
  // Call the choices to present the choices to the user
  choices();  

  // Calling the takeIn to take user input
  takeIn();

  // Presents the madlib in a neat manner
  showMadlib();
}

// Display options for the user to choose from
function choices(){
  if (gameState === "Initialize"){
    // Drawing the text OR so it looks neat when run
    textSize(20);
    text("OR", width/2-10, height/3+100);
  
    // shows the button once the initializing is completed
    if (gameState === "Initialize"){
      zeroButton.show();
      oneButton.show();
    }
  
    // Set up event listeners for button clicks
    // Sets and hides values and buttons if the user chooses to do either of the madlibs
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

// Take user input for the madlib
function takeIn(){
  // Showing the input fields and buttons
  if (gameState === "playing"){
    verbIn.show();
    nounIn.show();
    adjectiveIn.show();
    submitButton.show();
    gameState = "entering";
  }

  // Drawing the text so the user know what to ipnut and where
  if (gameState === "entering"){
    textSize(20);
    // Alligning fo rhtis specific bit to make hte text look neat
    textAlign(LEFT);
    text("Enter a verb below: ", width/2-width/2/2, height/4-10);
    text("Enter a noun below: ", width/2-width/2/2, height/4+70);
    text("Enter a adjective below: ", width/2-width/2/2, height/4+150);
    // Listens and reacts to continue with the program
    submitButton.mousePressed(end);
    // Aligning it back so it doesn't mess up the initialization from before
    textAlign(CENTER);
  }
}

// Process user input and shows the madlib
function end(){
  // Hiding the input fields and button
  verbIn.hide();
  nounIn.hide();
  adjectiveIn.hide();
  submitButton.hide();

  // Saving user inputs in the blanks object
  blanks.verb = verbIn.value();
  blanks.noun = nounIn.value();
  blanks.adjective = adjectiveIn.value();
  console.log(madlib);

  // Pops the last madlib if available
  if (madlib){
    madlib.pop();
  }
  
  // Generate the madlib based on user inputs and pushing it to the array
  madlib.push(generateMadlib(i));
  gameState = "showMadlib";
}

// Display the generated madlib
function showMadlib(){
  if (gameState === "showMadlib"){
    textSize(18);
    fill(140, 140, 140);
    noStroke();
    rect(width/2-width/1.2/2, height/2-height/2/2, width/1.2, height/1.5);
    fill("white");
    // Using the array to retrieve the user generated madlib
    text(madlib[0], width/2-width/1.2/2, height/1.8/2, width/1.2, height/1.4);
    fill("black");

    // Creating a restart button
    let restartButton = createButton("Restart");
    restartButton.position(width/6, height-40);
    restartButton.size(width/6, 20);
    restartButton.style("background-color", "red");
    restartButton.mousePressed(function() {
      // Resets the game depending on the user choice
      gameState = "Initialize";
    });
  }
}

// Initialize the UI elements
function initialize(){
  // Initializes and alligns the elements of the page
  imageMode(CENTER);
  textAlign(CENTER);

  // Creating neccessary buttons
  // This button is for one of the available user choices
  zeroButton = createButton("0: Anna's Grandma's house");
  zeroButton.position(width/2-width/2/2, height/3);
  zeroButton.size(width/2, 60);
  zeroButton.style("background-color", "red");
  
  // Another available madlib for the user
  oneButton = createButton("1: The World");
  oneButton.position(width/2-width/2/2, height/3+120);
  oneButton.size(width/2, 60);
  oneButton.style("background-color", "blue");

  // Creating a submit button to save user inputs
  submitButton = createButton("Submit");
  submitButton.position(width/2-width/5/2, height-height/4);
  submitButton.size(width/5, 30);
  submitButton.style("background-color", "green");

  // Creating input fields for user input
  // For Verbs
  verbIn = createInput();
  verbIn.position(width/2-width/2/2, height/4);
  verbIn.size(width/2, 30);

  // For Nouns
  nounIn = createInput();
  nounIn.position(width/2-width/2/2, height/4+80);
  nounIn.size(width/2, 30);

  // For Adjectives
  adjectiveIn = createInput();
  adjectiveIn.position(width/2-width/2/2, height/4+160);
  adjectiveIn.size(width/2, 30);

  // Hide UI elements initiallly to revive them only when needed
  submitButton.hide();
  verbIn.hide();
  nounIn.hide();
  adjectiveIn.hide();
}

// Generate a madlib based on user inputs, JS doesn't work like Pythong so when I would call the array it wouldn't update accordingly hence the generator
function generateMadlib(i){
  // Returns either of the 2 available choices
  return [`Anna was visiting Grandma's house and decided to ${blanks.verb} in the 
  attic while grandma ${blanks.verb} lunch. There were many ${blanks.verb} things 
  for her to see. Just then she heard someone ${blanks.verb} the staircase. She became 
  frightened, saw a ${blanks.adjective} trunk and opened it to hide inside. She climbed 
  inside and pulled the trunk shut at which time she plunged through a trap door that was 
  inside the trunk. She landed in a place that was outdoors where there were all different 
  kinds of trees, colorful flowers, birds and other animals of all shapes and sizes. But there 
  was something ${blanks.verb} different about the animals - they talked! Anna had so much fun 
  ${blanks.verb} with all the talking animals, however, she soon became tired and hungry and 
  wanted to go back home for some of grandma's good cooking. She climbed a tree to ask the wise 
  owl how to get back home, and just when she was about to speak she fell from the tree and hit 
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
  // Whenever the window is resized this funtion automatically resizes all of the following variables to fit neatly
  resizeCanvas(windowWidth, windowHeight);
  oneButton.position(width/2-width/2/2, height/3+120);
  zeroButton.position(width/2-width/2/2, height/3);
  verbIn.position(width/2-width/2/2, height/4);
  verbIn.size(width/2, 30);
  nounIn.position(width/2-width/2/2, height/4+80);
  nounIn.size(width/2, 30);
  adjectiveIn.position(width/2-width/2/2, height/4+160);
  adjectiveIn.size(width/2, 30);
  submitButton.position(width/2-width/5/2, height-height/4);
  submitButton.size(width/5, 30);
}
