class Die {
  constructor(sides) {
    this.sides = sides;
  }

  roll(times) {
    const rolls = [];
    for (let i = 0; i < times; i++) {
      rolls.push(this.#getSingleRoll());
    }
    return rolls;
  }

  // a private "helper" method
  #getSingleRoll() {
    return Math.ceil(Math.random() * this.sides);
  }
}

const sixSided = new Die(6);
console.log(sixSided.roll(3)); // Prints a random set of three rolls such as [ 2, 3, 6 ]