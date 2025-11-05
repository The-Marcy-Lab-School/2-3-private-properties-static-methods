class Circle {
  // this property is owned by the Circle class: Circle.PI
  static PI = 3.14159;

  constructor(radius) {
    // this property is owned by each Circle instance: instance.radius
    this.radius = radius;
  }

  // An "instance method": instance.getArea()
  getArea() {
    // notice how we can reference Circle.PI inside this instance method
    return Circle.PI * this.radius * this.radius;
  }

  // A "static method": Circle.isCircle(shape)
  static isCircle(shape) {
    return shape instanceof Circle;
  }
}

// The PI value is shared by ALL circles and doesn't depend on any circle instance
console.log(Circle.PI); // 3.14159

// Only the Circle class can verify if an object is a Circle
const myCircle = new Circle(10);
console.log(Circle.isCircle(myCircle)); // true

const randomObject = {};
console.log(Circle.isCircle(randomObject)); // false

// each circle instance has `getArea` which internally references the Circle.PI property
console.log(myCircle.getArea()); // 314.159