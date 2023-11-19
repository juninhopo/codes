/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let numInt = 0

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i].toUpperCase()
    const currentValue = romanValues[currentChar]
    const nextChar = s[i + 1]
    const nextValue = romanValues[nextChar]

    if (nextValue > currentValue) {
      numInt += nextValue - currentValue
      i++
    } else {
      numInt += currentValue
    }
  }

  console.log({
    title: 'for test',
    numInt,
  })

  return numInt
}

// for test
const test = 'MCMXCIV'
romanToInt(test)
