// Fix me! This code has some errors.

class Counter {
  #value = 0;

  increment() {
    this.value++;
  }

  getValue() {
    return this.value;
  }

  reset() {
    this.value = 0;
  }
}