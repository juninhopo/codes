const fs = require('fs')

const x = 0

async function test() {
  try {
    await fs.writeFile('test.txt', `${x}`)
  } catch (err) {
    console.log(err)
  }
}

async function test2() {
  await fs.writeFile('test2.txt', 'x')
}

test()
test2()

// Arrow function
const test1 = async () => {
  console.log('Another method of making a function -> Arrow Function')

  const user_id = 'user-id'

  return test
}

// The value of the const test2 is 'user-id'
const test2 = await test1
