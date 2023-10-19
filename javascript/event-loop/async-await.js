const fs = require('fs')

const x = 0

async function test() {

  try {
    await fs.writeFile('test.txt', `${x}`)
  } catch (err) {

  }

  await fs.writeFile('test.txt', `${x}`)
}

async function test2() {
  await fs.writeFile('test2.txt', 'x')
}

test()
test2()


