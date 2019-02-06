/**
 * Problem:
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 */

const prime = require("../Utils/prime");

let target = 600851475143;

for (let index = 1; index < target; index++) {
    if (target % index == 0) {

        // Get the upper value;
        let num = target / index;
        if (prime.isPrime(num)) {
            console.log("The largest prime factor: " + num);
            return;
        }
    }
}