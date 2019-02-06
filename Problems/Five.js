/**
 * TODO Finish this problem.
 *
 * Problem:
 *
 * 2520 is the smallest number that can be divided by
 * each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is
 * evenly divisible by all of the numbers from 1 to 20?
 */

const isDivisibleByNumbers = (num, arr) => {
    let flag = true;

    arr.forEach(val => {
        console.log(val);
        if (num % val !== 0) {
            flag = false;
            return;
        }
    });

    return flag;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let num = 20;
let smallest = null;

while(true) {
    if (isDivisibleByNumbers(num, arr)) {
        smallest = num;
        return;
    } else {
        num++;
    }
}

console.log('Winner: ' + smallest);