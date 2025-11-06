// Refactor me to use a static!

class Circle {
  PI = 3.14159;
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.PI * this.radius * this.radius;
  }
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.PI === circle2.PI); // true
