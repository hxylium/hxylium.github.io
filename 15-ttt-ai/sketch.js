// Tic Tac Toe w/ ai
// Hyder Shahzaib Ahmed
// 11/3/2023
//
// Resources: Coding Train Tutorial on Tic Tac Toe and Minimax
// Extra for Experts:
// - Utilized Minimaxer Algorithm/AI to be a player against the user

const cellSize = 100;

let currentPlayer = "X";
let gamestate = false;
// let grid = [];

let grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
function setup() {
  createCanvas(300, 300);
  textFont("Arial");
  textSize(60);
  stroke(69);
  drawGrid();
  // grid = generateEmptyGrid(3, 3);
}

function draw() {
  if (gamestate !== false) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(`${gamestate} wins!`, width/2, height/2);
  }
}

function mousePressed() {
  if (gamestate === false) {
    let i = floor(mouseX / 100);
    let j = floor(mouseY / 100);

    if (grid[i][j] === 0) {
      grid[i][j] = currentPlayer;
      if (checkgamestate()) {
        gamestate = currentPlayer;
      }
      else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
      drawGrid();
    }
  }
}

function drawGrid() {
  background(255);
  strokeWeight(4);
  for (let i = 1; i < 3; i++) {
    line(i * cellSize, 0, i * cellSize, height);
    line(0, i * cellSize, width, i * cellSize);
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * cellSize + 50;
      let y = j * cellSize + 50;
      let pos = grid[i][j];
      textAlign(CENTER, CENTER);
      if (pos === "X") {
        fill(0);
        text("X", x, y);
      }
      else if (pos === "O") {
        fill(0);
        text("O", x, y);
      }
    }
  }
}

function checkgamestate() {
  for (let i = 0; i < 3; i++) {
    if (grid[0][i] === "X" && grid[1][i] === "X" && grid[2][i] === "X" || grid[i][0] === "X" && grid[i][1] === "X" && grid[i][2] === "X" || grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X" || grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") {
      return true;
    }
    if (grid[0][i] === "O" && grid[1][i] === "O" && grid[2][i] === "O" || grid[i][0] === "O" && grid[i][1] === "O" && grid[i][2] === "O" || grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O" || grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") {
      return true;
    }
  }
  return false;
}

// function generateEmptyGrid(cols, rows){
//   let newgrid = [];
//   for (let i = 0; i < cols; i++){
//     newgrid.push([]);
//     for (let j = 0; j < rows; j++){
//       newgrid[i].push(0);
//     }
//   }
//   return newgrid;
// }