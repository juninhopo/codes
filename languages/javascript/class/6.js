class Color {
  constructor(r, g, b) {
    // Assign the RGB values as a property of 'this'
    this.values = [r, g, b]
  }
}

const red = new Color(255, 0, 0)
const green = new Color(0, 255, 0)
const blue = new Color(0, 0, 255)

console.log(red)
console.log(green)
console.log(blue)
