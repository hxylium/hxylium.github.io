// 2D Grid Array Neighbours
// Hyder Shahzaib Ahmed
// 10/25/2023

let grid;

let cellSize;
const GRID_SIZE = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = randomGridGenerator(GRID_SIZE, GRID_SIZE);
  cellSize = width/GRID_SIZE;
}


function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);

  toggleCell(x, y);
  toggleCell(x, y-1);
  toggleCell(x, y+1);
  toggleCell(x+1, y);
  toggleCell(x-1, y);
}

function toggleCell(x, y){
  if(x >= 0 && x <= GRID_SIZE-1 && y >= 0 && y <= GRID_SIZE){
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else{
      grid[y][x] = 0;
    }
  }
}

function randomGridGenerator(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < cols; y++) {
    newGrid.push([]);
    for (let x = 0; x < rows; x++) {
      if (random(100) < 50) {
        newGrid[y][x] = 0;
      }
      else {
        newGrid[y][x] = 1;
      }
    }
  }
  return newGrid;
}

function displayGrid(){
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if(grid[y][x] === 0){
        fill("black");
      }
      else{
        fill("white");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}