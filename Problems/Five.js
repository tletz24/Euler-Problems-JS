/**
 * TODO Try to not use brute force
 * to solve this problem.
 *
 * Problem:
 *
 * 2520 is the smallest number that can be divided by
 * each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is
 * evenly divisible by all of the numbers from 1 to 20?
 */

console.time('Problem 5');

let i = 20;
let comparisons = 0;

while (i % 20 !== 0 || i % 19 !== 0 || i % 18 !== 0
    || i % 17 !== 0 || i % 16 !== 0 || i % 15 !== 0
    || i % 13 !== 0 || i % 12 !== 0 || i % 11 !== 0) {
  comparisons += 1;
  i += 4;
}

console.timeEnd('Problem 5');

console.log(`Smallest number is ${i}`);
console.log(`# of comparisons: ${comparisons}`);
