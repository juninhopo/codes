// Given an integer x, return true if x is
// a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left
// to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121.
// From right to left, it becomes 121-.
// Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.
// Therefore it is not a palindrome.

// Constraints:
// -231 <= x <= 231 - 1

// Follow up: Could you solve it without
// converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reverse = x.toString().split('').reverse().join('')

  // toString: convert x to string
  // split: splits the string into an array of substrings
  // reverse: reverses the order of elements in an array
  // join: joins all elements of an array into a single string

  if (reverse.toString() === x.toString()) {
    return true
  }

  console.log({
    test: 'Init test',
    value: x,
    reverse,
  })

  return false
}

// for test
const test = 121
isPalindrome(test)
