/**
 * Function to determine if a given number is a Palindrome.
 *
 * @param {int} number integer to eval.
 */
const checkNumberPalindrome = (number) => {
  let tmp = number; let
    reverse = 0;

  while (tmp > 0) {
    const remainder = tmp % 10;
    reverse = reverse * 10 + remainder;

    tmp = parseInt(tmp / 10, 10);
  }

  return (reverse === number);
};

/**
 * TODO make & test correctness of a string palindrome checker.
 *
 * Function to determine if a given string is a Palindrome.
 * Credit: Sonya Moisset
 * @see https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
 *
 * @param {string} str string to eval.
 */
const checkStringPalindrome = (str) => {
  const re = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(re, '');
  const reverseStr = lowRegStr.split('').reverse().join('');

  return reverseStr === lowRegStr;
};

/**
 * TODO test this.
 *
 * Control structure for determining if a variable
 * of any type.
 *
 * Supported:
 * - Numbers
 *
 * @param {any} value any type to evaluate
 */
const isPalindrome = (value) => {
  switch (typeof value) {
    case 'number':
      return checkNumberPalindrome(value);
    case 'string':
      return checkStringPalindrome(value); // Unsupported.
    default:
      return false;
  }
};

// Export all of the functions.
module.exports = {
  isPalindrome,
  checkNumberPalindrome,
  checkStringPalindrome,
};
