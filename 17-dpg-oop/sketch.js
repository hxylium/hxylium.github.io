// Dog OOP
// Hyder Shahzaib Ahmed
// 11/14/23

class Dog{
  constructor(name, color, breed, age, size){
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.size = size;
  }

  bark(){
    console.log("Arf! says " + this.name);
  }
}

let spot = new Dog("Spot", "Gold", "Golder retreiver", 6, "Big");
let rover = new Dog("Rover", "White", "Poodle", 3, "Small");

function setup() {
  createCanvas(windowWidth, windowHeight);
  spot.bark();
  rover.bark();
}

function draw() {
  background(220);
}
