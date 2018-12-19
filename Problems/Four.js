import checkNumberPalindrome() from '../Utils/palindrome';

largest = null;

for (let p = 999; p > 99; p--) {
    for (let q = 999; q > 99; q--) {
        temp = p * q;

        if(checkNumberPalindrome(temp) && temp > largest) {
            largest = temp;
        }
    }
}

console.error("Largest: " + largest);