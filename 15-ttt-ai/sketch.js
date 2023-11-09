// Tic Tac Toe w/ ai
// Hyder Shahzaib Ahmed
// 11/3/2023
//
// Resources: Coding Train Tutorial on Tic Tac Toe and Minimax
// Extra for Experts:
// - Utilized Minimaxer Algorithm/AI to be a player against the user

const cellSize = 100;
let Ypos = 200;
let Xpos = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  drawGrid();
  drawX();
}

function drawGrid() {
  for (let y = 1; y < 3; y++) {
    for (let x = 1; x < 3; x++) {
      stroke("black");
      strokeWeight(6);
      line(x*cellSize+Xpos, Ypos, x*cellSize+Xpos, cellSize*3+Ypos); // vertical lines
      line(Xpos, y*cellSize+Ypos, cellSize*3+Xpos , y*cellSize+Ypos); // horizontal lines
    }
  }
}

function drawX(xpos, ypos){
  textSize(60);
  textFont("Arial");
  text("X", xpos+cellSize/2-25+Xpos, 70+Ypos+ypos);
}