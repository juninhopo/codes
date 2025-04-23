/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  let str = strs[0]

  for (let word of strs) {
    while (word.indexOf(str) !== 0) {
      console.log(
        `Current word: ${word}, Current str: ${str}, Index of str in word: ${word.indexOf(
          str
        )}`
      )

      str = str.slice(0, str.length - 1)
    }
  }

  console.log({
    str,
  })

  return str
}

// for test
const test = ['cachorro', 'capichaba', 'cameraman', 'capichaba']
longestCommonPrefix(test)
