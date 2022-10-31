"use strict";

function makeFibonacciFunction() {
    let a = 1;
    let b = 1;

    function result() {
        let c;
        c = a;
        a = b;
        b = b + c;
        return c;
    }
    return result;
}

const fibonacci = makeFibonacciFunction();

console.log(fibonacci()); // Вывод в консоль: 1
console.log(fibonacci()); // Вывод в консоль: 1
console.log(fibonacci()); // Вывод в консоль: 2
console.log(fibonacci()); // Вывод в консоль: 3
console.log(fibonacci()); // Вывод в консоль: 5
