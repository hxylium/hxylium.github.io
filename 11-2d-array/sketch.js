// 2D Array Grid
// Hyder Shahzaib Ahmed
// 10/24/2023

// let grid = [[0, 0, 0, 1, 1], 
//             [0, 0, 1, 0, 1],
//             [0, 0, 1, 1, 1],
//             [0, 1, 0, 0, 1],
//             [0, 1, 0, 1, 1],
//             [0, 1, 1, 0, 1],
//             [0, 1, 1, 1, 1],
//             [1, 0, 0, 0, 1],
//             [1, 0, 0, 1, 1],
//             [1, 0, 1, 0, 1],
//             [1, 1, 0, 0, 1],
//             [1, 1, 0, 1, 1],
//             [1, 1, 1, 0, 1],
//             [1, 1, 1, 1, 1]];

let grid;
const GRID_SIZE = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  let cellWidth = width/grid[0].length;
  let cellHeight = width/grid.length;

  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++){
      if(grid[y][x] === 0){
        fill("white");
      }
      else{
        fill("black");
      }
      rect(cellWidth * x, cellHeight * y, cellWidth, cellHeight);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createRandom2DArray(cols, rows){
  let randomGrid = [];
  for(let y = 0; y < rows; y++){
    randomGrid.push([]);
    for(let x = 0; x < cols; x++){
      if(random(100) < 50){
        randomGrid[y].push(0);
      }
      else{
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}

function keyTyped(){
  if(key === "r"){
    grid = createRandom2DArray(GRID_SIZE, GRID_SIZE);
  }
  else if (key === "e"){
    grid = createEmpty2DArray(GRID_SIZE, GRID_SIZE);
  }
}

function createEmpty2DArray(cols, rows){
  let emptyGrid = [];
  for(let y = 0; y < rows; y++){
    emptyGrid.push([]);
    for(let x = 0; x < cols; x++){
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}