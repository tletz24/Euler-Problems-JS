/**
 * Problem:
 *
 * If we list all the natural numbers
 * below 10 that are multiples of 3 or
 * 5, we get 3, 5, 6 and 9. The sum of
 * these multiples is 23. Find the sum of
 * all the multiples of 3 or 5 below 1000.
 */

console.time('Problem 1');

 let total = 0;

for (let i = 1; i < 1000; i += 1) {
  if ((i % 3) === 0 || (i % 5) === 0) {
    total += i;
  }
}

console.timeEnd('Problem 1');

console.log(`Total: ${total}`);
