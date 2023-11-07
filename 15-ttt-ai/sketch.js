// Tic Tac Toe w/ ai
// Hyder Shahzaib Ahmed
// 11/3/2023
//
// Extra for Experts:
// - Utilized Minimaxer Algorithm/AI to be a player against the user

const cellSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  drawGrid();
}

function drawGrid() {
  // draw the grid lines
  for (let y = 1; y < 3; y++) {
    for (let x = 1; x < 3; x++) {
      stroke("black");
      strokeWeight(5);

      line(x*cellSize, 0, x*cellSize, cellSize*3); // vertical lines
      line(0, y*cellSize, cellSize*3 , y*cellSize); // horizontal lines
    }
  }
}