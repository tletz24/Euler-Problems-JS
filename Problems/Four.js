/**
 * Problem
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two
 * 2-digit numbers is 9009 = 91 × 99. Find the largest
 * palindrome made from the product of two 3-digit numbers.
 */

function checkPalindrome(number) {
    let rem, temp, final = 0;

    temp = number;
    while(number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }

    if (final == temp) {
        return true;
    } else {
        return false;
    }
}

largest = null;

for (let p = 999; p > 99; p--) {
    for (let q = 999; q > 99; q--) {
        temp = p * q;

        if(checkPalindrome(temp) && temp > largest) {
            largest = temp;
        }
    }
}

console.error("Largest: " + largest);