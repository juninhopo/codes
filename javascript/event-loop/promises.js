const fs = require('fs')

const x = 0

fs.writeFile('test.txt', `${x}`)
  .then(() => {
    console.log('Finish callback => ' + x)
    return fs.writeFile('test2.txt', 'x')
  })
  .then(() => {
    console.log('Finished second callback => ' + x)
  })
  .catch((err) => {
    console.log(err)
  })
