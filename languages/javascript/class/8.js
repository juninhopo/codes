class Dog {
  constructor(name) {
    this._name = name
  }

  introduce() {
    console.log('This is ' + this._name + '!')
  }

  // A static method
  static bark() {
    console.log('Woof!')
  }
}

const myDog = new Dog('Nina')
myDog.introduce()

// Calling the static method
Dog.bark()
