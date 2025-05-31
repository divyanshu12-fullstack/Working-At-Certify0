// -------------------------------------
// 🔹 Scope in JavaScript
// -------------------------------------

// Global Scope
let globalVar = "Hello";

function greet() {
    // Local Scope (Function Scope)
    let x = 25;
    console.log(globalVar);              // Accessible (from global)
    console.log(`Inside Function x: ${x}`);
}

// Block Scope with if
if (true) {
    // var is function-scoped, not block-scoped
    var x = 25;
    console.log(globalVar);              // Accessible
    console.log(`Inside block x: ${x}`); // x is declared with var
}

greet();
console.log(`Outside block x: ${x}`);    // Accessible because x is declared with var

// -------------------------------------
// 🔹 Hoisting
// -------------------------------------

// Example with var (hoisted and initialized as undefined)
console.log(num); // Output: undefined
var num = 20;

// Example with let (would throw ReferenceError if uncommented)
/*
console.log(num1); // ❌ ReferenceError: Cannot access 'num1' before initialization
let num1 = 20;
*/

// Explanation: TDZ (Temporal Dead Zone) for let/const

// -------------------------------------
// 🔹 Closure
// -------------------------------------

// A closure is when a function "remembers" variables from the scope it was created in

function outer() {
    let name = "Divyanshu";
    function inner() {
        console.log("Hello " + name); // name is remembered
    }
    return inner;
}

let greetings = outer();
greetings(); // Output: Hello Divyanshu

// Example: Custom Counter using Closure
function counter() {
    let count = 0; // count is private
    return function () {
        count++;
        console.log(count);
    };
}

const myCounter = counter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
myCounter(); // 4

// -------------------------------------
// 🔹 Call Stack (LIFO) - Factorial Example
// -------------------------------------

// Recursive Factorial Function
function factorial(n) {
    if (n < 0) return "Invalid input";  // ✅ Handle negative input
    if (n === 0 || n === 1) return 1;   // Base case
    return n * factorial(n - 1);        // Recursive call
}

console.log(factorial(5)); // Output: 120

// -------------------------------------
// 🔹 Fibonacci Sequence (TODO)
// -------------------------------------

// You can implement this as an exercise
/*
function fibonacci(n) {
    // Example implementation:
}
*/

