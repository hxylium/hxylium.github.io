// Sierpinski Triangle
// Hyder Shahzaib Ahmed
// 1/2/24

let intialTri = [
  {x: 400, y: 50},
  {x: 50, y: 550},
  {x: 750, y: 550}
];

let depth;
let theColors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#000000"
];

function setup() {
  createCanvas(800, 600);
  depth = 0;
}

function draw() {
  background(220);
  sierpinski(intialTri, depth);
}

function mousePressed() {
  if (depth < theColors.length - 1){
    depth++;
  }
}

function sierpinski(tri, deg) {
  let a = tri[0];
  let b = tri[1];
  let c = tri[2];
  fill(theColors[deg]);
  triangle(a.x, a.y, b.x, b.y, c.x, c.y);
  if (deg > 0) {
    sierpinski([a, midpoint(a, b), midpoint(a, c)], deg - 1);
    sierpinski([b, midpoint(b, a), midpoint(b, c)], deg - 1);
    sierpinski([c, midpoint(c, a), midpoint(c, b)], deg - 1);
  }
}

function midpoint(a, b) {
  let newX = (a.x + b.x) / 2;
  let newY = (a.y + b.y) / 2;
  return {x: newX, y: newY};
}