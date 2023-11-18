nums = [2, 7, 11, 15]

let test = new Map()

for (let i = 0; i < nums.length; i++) {
  test.set(nums[i], i)
  console.log(`value: ${nums[i]} position: ${i}`)
}

const has1 = test.has(2)
const has2 = test.has(7)
const has3 = test.has(11)
const has4 = test.has(15)

const get1 = test.get(2)
const get2 = test.get(7)
const get3 = test.get(11)
const get4 = test.get(15)

const whatIsTest = typeof test

console.log({
  test,
  has1,
  has2,
  has3,
  has4,
  get1,
  get2,
  get3,
  get4,
  whatIsTest,
})

console.log(test)

// Para eu acessar os valores de um Map() constructror
// preciso dar um get

console.log({
  test1: test.get(2),
  test2: test.get(15),
})
