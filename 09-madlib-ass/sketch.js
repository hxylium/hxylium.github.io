// Madlibs using Object Notation
// Hyder Shahzaib Ahmed
// 10/18/2023
//
// Extra for Experts:
// My extra for experts would be using the premade button and inout field functions of P5js, the only reason I used the premade ones were to keep the code simplistic.


let verbInput;
let submitButton;
let userInput;
let verb;
let pick_verb = "something";
let madlibs = [
  `Anna was visiting Grandmas house and decided to ${pick_verb} in the attic while grandma ${pick_verb} lunch. There were`
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an input field
  verbInput = createInput();
  verbInput.position(20, 20);

  // Create a submit button
  submitButton = createButton("Submit");
  submitButton.position(20, 50);
  submitButton.mousePressed(processInput);
  console.log(madlibs[0]);
}

function draw() {
  background(220);

  console.log(verb);
}

function processInput() {
  // Get the value entered by the user in the input field
  verb = verbInput.value();
  // Display the user's input
  textSize(42);
  text(`You entered: ${userInput}`, 20, 100);
  // You can perform further actions with the user's input here
}
