// Hire not have nothing to blocking
const x = 0
console.log(x)

// Manipulating files is very slow
const fs = require('fs')

const callback = () => {
  console.log('The finish callback')
}

fs.writeFile('test.txt', `${x}`, callback())

console.log(`Second: `, x)
