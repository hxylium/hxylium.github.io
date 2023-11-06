// Tic Tac Toe w/ ai
// Hyder Shahzaib Ahmed
// 11/3/2023
//
// Extra for Experts:
// - Utilized Minimaxer Algorithm/AI to be a player against the user



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  drawTicTacToeGrid(width/2, height/2);
}

function drawTicTacToeGrid(x, y){
  let w = 400 / 3;
  let h = 400 / 3;
  strokeWeight(4);
  line(x-w, 0, x-w, h*3);
  line(x-(w * 2), 0, x-(w * 2), h*3);
  line(x-w, h, w*3, h);
  line(x-w, h * 2, w*3, h * 2);
}