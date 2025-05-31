// Loops

// for loop -> for(initialization; condition; increment/decrement)
for (let i = 1; i <= 10; i++) {
    console.log(i); // Prints numbers from 1 to 10
}

console.log("Reverse Order");
for (let i = 10; i >= 1; i--) {
    console.log(i); // Prints numbers from 10 to 1 in reverse order
}

// While Loop 
let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(`Even Number is: ${j}`); // Prints even numbers from 1 to 20
    }
    j++;
}

// Do while loop
let k = 101;
do {
    if (k % 2 !== 0) {
        console.log(`Odd Number is: ${k}`); // Will print 101 once, since loop runs at least once
    }
    k++;
} while (k <= 20); // Condition false initially, so loop runs only once

// Nested loops
// Prints multiplication table for numbers 2, 3, and 4
for (let m = 2; m <= 4; m++) {
    for (let n = 1; n <= 10; n++) {
        let ans = m * n;
        console.log(`${m} * ${n} = ${ans}`);
    }
}

// Star pattern (right-angled triangle)
let rows = 5;
for (let p = 1; p <= rows; p++) {
    let pattern = "";
    for (let q = 1; q <= p; q++) {
        pattern += "* "; // Adds stars according to row number
    }
    console.log(pattern); // Prints each row
}

// Control flow -> break, continue and return

let x = 1;
while (x <= 20) {
    if (x === 8) {
        break; // Exit loop if x is 8
    }
    if (x % 2 === 0) {
        console.log(`Even Number is: ${x}`); // Print even numbers until x is 8
    }
    x++;
}

for (let i = 10; i >= 1; i--) {
    if (i === 8) continue; // Skip number 8
    console.log(i); // Print numbers from 10 to 1 except 8
}

function add(a, b) {
    return a + b; // Returns the sum of a and b
}
let sum = add(10, 20); // sum = 30

// FizzBuzz
console.log("Interview Problem");
let endValue = 30;
let startValue = 1;

while (startValue <= 30) {
    if (startValue % 3 === 0 && startValue % 5 === 0) {
        console.log("FizzBuzz"); // Divisible by both 3 and 5
    } else if (startValue % 3 === 0) {
        console.log("Fizz"); // Divisible by 3 only
    } else if (startValue % 5 === 0) {
        console.log("Buzz"); // Divisible by 5 only
    } else {
        console.log(startValue); // Not divisible by 3 or 5
    }
    startValue++;
}

// Reverse Digits Example: 1978 -> 8791
let num = 1978;
let reverseNum = 0;
while (num !== 0) {
    let digit = num % 10; // Extract last digit
    reverseNum = reverseNum * 10 + digit; // Append digit to reversed number
    num = Math.floor(num / 10); // Remove last digit from num
}
console.log(reverseNum); // Output: 8791
