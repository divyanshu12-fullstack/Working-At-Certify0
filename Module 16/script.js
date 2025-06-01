// 🔹 JavaScript Basics
// -----------------------------------
// Single Threaded: JS can do one thing at a time (1 Call Stack).
// Synchronous by default: Executes line-by-line, waiting for each line to finish.

// Promises, Callbacks, and Async/Await are tools to handle asynchronous tasks (e.g., fetching data).

// 🔹 Execution Context
// -----------------------------------
// Every time JS runs a script or a function, it creates an Execution Context.

// 1. Memory Creation Phase (Hoisting):
//    - All variables are hoisted (declared).
//    - var → initialized as undefined
//    - let & const → hoisted but kept in TDZ (Temporal Dead Zone)
//    - Functions → fully hoisted

// 2. Execution Phase:
//    - Variables get assigned actual values
//    - Code runs line by line

// Types of Execution Contexts:
// - Global Execution Context (GEC): created when the script starts
// - Function Execution Context (FEC): created whenever a function is invoked
// - Eval Execution Context (rare, from eval())

// 🔹 Code Example
// -----------------------------------

var a = 10;

function greet() {
    var b = 20;
    console.log(a + b); // a from global, b is local to greet
}

greet(); // Triggers a Function Execution Context

// 🔹 Call Stack
// -----------------------------------
// Tracks execution contexts in LIFO order:
// [greet FEC] gets pushed when greet() is called
// After greet() finishes, its context is popped off the stack

// 🔹 Event Loop – Handles Async & Non-Blocking Behavior
// -----------------------------------
// JS delegates async tasks to the browser (Web APIs).
// Once done, callbacks are queued in the Callback Queue.
// Event Loop moves them to the Call Stack when it's empty.

console.log("Start"); // Synchronous → goes into Call Stack immediately

setTimeout(() => console.log("Working"), 0);
// setTimeout is sent to Web API (handled by browser)
// After 0ms, callback is added to Callback Queue (not run immediately)

console.log("End"); // Still synchronous → runs before the callback

// Once the Call Stack is empty, the Event Loop pushes the timeout callback onto the Call Stack.
// Output:
// Start
// End
// Working

// Even with 0ms delay, the callback runs AFTER the current synchronous code finishes.

