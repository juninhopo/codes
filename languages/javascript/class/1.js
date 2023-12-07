class ClassName {
  constructor(name, year) {
    this.name = name
    this.year = year
  }

  age() {
    const date = new Date()
    return date.getFullYear() - this.year
  }
}

const myCar = new Car('Ford', 2014)

document.getElementById('demo').innetHtml =
  'My car is ' + myCar.age() + ' years old.'
