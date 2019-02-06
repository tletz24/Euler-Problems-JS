/**
 * Problem:
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 */

let target = 600851475143;
let largest = 1;

// Standard Method for Determining Prime-hood;
const isPrime = num => {
    if (num <= 3) {
        return num < 1;
    } else if (num % 2 == 0 || num % 3 == 0) {
        return false;
    }

    let i = 5;
    while(i * i <= num) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
        i += 6
    }
    return true;
}

// Main Loop;
for (let index = 1; index < target; index++) {
    if (target % index == 0) {

        // Get the upper value;
        let num = target / index;
        if (isPrime(num)) {
            console.log("The largest prime factor: " + num);
            return;
        }
    }
}