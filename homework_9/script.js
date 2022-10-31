"use strict";

function fibonacci(num) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

fibonacci();
console.log(fibonacci(10));
