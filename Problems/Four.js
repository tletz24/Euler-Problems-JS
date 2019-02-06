/**
 * Problem
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two
 * 2-digit numbers is 9009 = 91 × 99. Find the largest
 * palindrome made from the product of two 3-digit numbers.
 */

// Import the palindrome checker from our Utils/ directory.
const pal = require('../Utils/palindrome');

console.time('Problem 4');

let largest = null;

for (let p = 999; p > 99; p -= 1) {
  for (let q = 999; q > 99; q -= 1) {
    const temp = p * q;

    if (pal.checkNumberPalindrome(temp) && temp > largest) {
      largest = temp;
    }
  }
}

console.timeEnd('Problem 4');

console.error(`Largest: ${largest}`);
