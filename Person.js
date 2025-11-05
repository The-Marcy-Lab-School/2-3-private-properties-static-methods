class Person {
  friends = [];

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  addFriend(newFriend) {
    if (typeof newFriend !== 'string') {
      return;
    }
    this.friends.push(newFriend);
  }

  greet() {
    console.log(`Hi, I'm ${this.name}. I am ${this.age} years old and I have ${this.friends.length} friends.`);
  }
}

const ada = new Person('Ada Lovelace', 36)
ada.addFriend('Alan');
ada.addFriend('Nikola');

ada.friends.push(null);
ada.friends.push(false);
ada.greet(); // Hi, I'm Ada Lovelace. I am 36 years old and I have 4 friends.

// But do you have 4 friends Ada?