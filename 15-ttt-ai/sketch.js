/* Tic Tac Toe w/ Ubeatable-AI (Static)
Hyder Shahzaib Ahmed
11/3/2023

Static: Means that the game is not running on 60fps and being constantly refreshed, but rather just static and remains on 1 frame forever till refreshed on command

Resources: Coding Train Tutorial on Tic Tac Toe and Minimax
Extra for Experts:
  - Utilized Minimaxer Algorithm/AI to be a player against the user 
  
To Play:
  - Just click on wherever you would like to play your X at and that's it!
  */


// Declare variables
const cellSize = 100;

let currentPlayer = "X";
let gamestate = false;
let grid;

// Initializing the setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  initialize();
}

// Initialize function to initialize key components of the game
function initialize(){
  // Create an empty array to represent the grid
  grid = generateEmptyGrid(3, 3);
  textFont("Arial");
  textSize(60);
  stroke(72);
  drawGrid();  
}

// Function to display the winner
function run(){
  // Check if the game is over
  if (gamestate !== false) {
    // Check if the game is a tie and displaying
    if (!grid.flat().includes(0)) {
      gamestate = "Tie";
      textSize(42);
      textAlign(CENTER, CENTER);
      noStroke();
      text(`${gamestate}!`, cellSize*3/2, cellSize*3 + 50);
    }

    // Displaying the winner
    else if (gamestate === "O"){
      textSize(42);
      textAlign(CENTER, CENTER);
      noStroke();
      text("AI wins!", cellSize*3/2, cellSize*3 + 50);
    }
    else {
      textSize(42);
      textAlign(CENTER, CENTER);
      noStroke();
      text("You win!", cellSize*3/2, cellSize*3 + 50);
    }
  }
}

// Draw function to draw the grid and run the game
function draw() {
  run();
}

// Function to check if the mouse is pressed
function mousePressed() {
  // If there's not already a winner or it's a tie
  if (gamestate === false) {
    // Drawing the lines appropriately for the game
    let i = floor(mouseX/cellSize);
    let j = floor(mouseY/cellSize);

    // If the grid is empty, then draw the X or O
    if (grid[i][j] === 0) {
      grid[i][j] = currentPlayer;

      // If theres a winner change the game state
      if (checkgamestate()) {
        gamestate = currentPlayer;
      }

      // AI plays its move
      else {
        // Checks whose the current player and switches accordigly
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        // If the current player is O, then the AI plays its move
        if (currentPlayer === "O") {
          let bestMove = minimax(grid, 0, true);
          grid[bestMove.i][bestMove.j] = currentPlayer;

          // If theres a winner change the game state
          if (checkgamestate()) {
            gamestate = currentPlayer;
          } 

          // Checks whose the current player and switches accordigly
          else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      }

      // Drawing the grid again after someone has played
      drawGrid();
    }
  }
}

// Function to draw the grid
function drawGrid() {
  // Predefining the colors to suit the game
  background(255);
  strokeWeight(4);

  // Short Description
  textSize(12);
  noStroke();
  textAlign(CENTER, CENTER);
  text("TicTacToe w/ Unbeatable Ai", cellSize*3/2, cellSize*3 + 12);
  textFont("Arial");
  textSize(60);
  stroke(72);

  // Drawing the grid
  for (let i=1; i<3; i++) {
    line(i*cellSize, 0, i*cellSize, cellSize*3);
    line(0, i*cellSize, cellSize*3, i*cellSize);
  }

  // Drawing the X's and O's
  for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
      let x = i*cellSize + 50;
      let y = j*cellSize + 50;
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

// Function to check the game state
function checkgamestate() {
  for (let i=0; i <3; i++) {
    // Checks all the possibilities for X to win
    if (grid[0][i] === "X" && grid[1][i] === "X" && grid[2][i] === "X" || grid[i][0] === "X" && grid[i][1] === "X" && grid[i][2] === "X" || grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X" || grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") {
      return "X";
    }

    // Checks all the possibilites for O to win
    if ( grid[0][i] === "O" && grid[1][i] === "O" && grid[2][i] === "O" || grid[i][0] === "O" && grid[i][1] === "O" && grid[i][2] === "O" || grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O" || grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") {
      return "O";
    }
  }

  // Checks if the game is a tie
  if (!grid.flat().includes(0)) {
    // Returns to make sure that the game still functions properly and deosn't crash
    return "Tie";
  }
  
  // Returns false if none of the above conditions are met
  return false;
}

// Minimax Algorithm, THE UNBEATABLE AI
function minimax(board, depth, maximizingPlayer) {
  // If the game is over, return the score for the current state
  let result = checkgamestate();
  if (result !== false) {
    let scores = { 
      X: -1, 
      O: 1, 
      Tie: 0 };
    return {score: scores[result]};
  }

  // If the AI is the currentplayer decides the move and returns the best move it finds
  if (maximizingPlayer) {
    let bestScore = -Infinity;
    let move;

    // Giving the boards current state so that it understand the current game standings and act accordingly
    for (let i=0; i< 3; i++) {
      for (let j=0; j<3; j++) {
        if (board[i][j] === 0) {
          board[i][j] = "O";
          let score = minimax(board, depth+1, false).score;
          board[i][j] = 0; // Undo the move

          // Update the best score and move if the current move is better
          if (score > bestScore) {
            bestScore = score;
            move = {i, j};
          }
        }
      }
    }

    // returns the best move O can make
    return {score: bestScore, i: move.i, j: move.j};
  } 

  // If the AI is not the current player, then it will try to find the worse move X can make
  else {
    let bestScore = Infinity;
    let move;

    // Iterating and understanding all the possibl moves for X
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        if (board[i][j] === 0) {
          board[i][j] = "X";
          let score = minimax(board, depth+1, true).score;
          // Undos the test it made to see how it would affect the board
          board[i][j] = 0;
          // Updates if it finds a worse move lol
          if (score < bestScore) {
            bestScore = score;
            move = {i, j};
          }
        }
      }
    }
    
    //Returns the lowest movve X can make
    return {score: bestScore, i: move.i, j: move.j};
  }
}

// Function to generate an empty grid
function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y=0; y<rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  
  // Returns the new empty grid
  return newGrid;
}

// function checkgamestate() {
//   for (let i = 0; i < 3; i++) {
//     if (grid[0][i] === "X" && grid[1][i] === "X" && grid[2][i] === "X" || grid[i][0] === "X" && grid[i][1] === "X" && grid[i][2] === "X" || grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X" || grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") {
//       return true;
//     }
//     if (grid[0][i] === "O" && grid[1][i] === "O" && grid[2][i] === "O" || grid[i][0] === "O" && grid[i][1] === "O" && grid[i][2] === "O" || grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O" || grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") {
//       return true;
//     }
//   }
//   return false;
// }

// function keyPressed() {
//   if (keyCode === 32) {
//     resetGame();
//   }
// }

// function resetGame() {
//   currentPlayer = "X";
//   gamestate = false;
//   grid = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
//   ];
//   drawGrid();
// }