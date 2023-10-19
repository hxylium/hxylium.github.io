let submitButton;
let verbInput;
let blanks = {
  verb: "",
  noun: "",
  adjective: "",
  Name: ""
};
let madlibs;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an input field
  verbInput = createInput();
  verbInput.position(20, 20);
  verbInput.id("myText");
  processInput();

  // Create a submit button
  submitButton = createButton("Submit");
  submitButton.position(20, 50);
  submitButton.mousePressed(processInput);
  submitButton.id("myButton");
}

function draw() {
  background(220);
  
  if (key === "d"){
    // let removeB = select('#myButton');
    // removeB.remove();
    // let removeT = select('#myText');
    // removeT.remove();
    submitButton.hide();
  }
  if (key === "f"){
    verbInput.hide();
  }
  text("Deleted", width/2, height/2);

  // submitButton.hide();
  circle(width/2, height/2, 50);

  console.log(blanks.verb);
  console.log(madlibs);
}

function processInput() {
  // Get the value entered by the user in the input field
  blanks.verb = verbInput.value();

  // Generate the madlib using user-entered values
  madlibs = generateMadlib(1);

  // Redraw the canvas to display the madlib
  redraw();
}

function generateMadlib(i) {
  return [`Anna was visiting Grandma's house and decided to ${blanks.verb} in the attic while Grandma ${blanks.verb} lunch. There were`, `many ${blanks.verb} things for her to see. Just then she heard someone ${blanks.verb} the `][i];
}
