/**
 * A standard function to determine if a number
 * is prime.
 *
 * @param {int} number to test
 */
var isPrime = (num) => {
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
};

module.exports = {
    isPrime,
}