let term_1 = 1;
let term_2 = 2;
let next_term = term_1 + term_2;

let total = 0;

while (term_2 < 4000000) {
    if (term_2 % 2 == 0) {
        total += term_2
    }

    next_term = term_1 + term_2;
    term_1 = term_2;
    term_2 = next_term;
}

console.log("Total: " + total);