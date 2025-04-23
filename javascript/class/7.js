function Hero(name, level) {
  this.name = name
  this.level = level
}

// Adding a method to the constructor
Hero.prototype.greet = function () {
  return `${this.name} says hello.`
}

// Creating a new class from the parent
class Mage extends Hero {
  constructor(name, level, spell) {
    // Chain constructor with super
    super(name, level)

    // Add a new property
    this.spell = spell
  }
}

const hero1 = new Hero('Junim', 50)
const hero2 = new Mage('Lejon', 15, 'Magic Missile')
const hero3 = new Mage('Saruman', 200, 'Fire Ball')

// To see the tests
console.log({
  hero1,
  hero2,
  hero3,
})
