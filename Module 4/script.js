//  Function Declaration: Adds two numbers and logs the result
function add(a, b) {
    let result = a + b;
    console.log("Sum:", result);
}

//  Function Declaration: Multiplies two numbers and returns the result
function mul(a, b) {
    return a * b;
}

// Call the multiplication function and store the result
let multiplyAns = mul(10, 3);
console.log("Multiplication Result:", multiplyAns);

// Call the add function with different sets of arguments
add(10, 20);
add(30, 18);
add(12, 2);

//  Function to implement the FizzBuzz logic
function fizzBuzz(endValue) {
    let startValue = 1;

    while (startValue <= endValue) {
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
}

// Run fizzBuzz up to 2 (will just print 1 and 2)
fizzBuzz(2);

//  Function Expression: Greet function
const greet = function (name) {
    console.log("Greeting:", name);
};
greet("hello");

//  Arrow Function: Adds two numbers and logs the result
const addition = (a, b) => {
    console.log("Arrow Function Sum:", a + b);
};
addition(5, 7);

//  Arrow Function: No parameters, logs a message
const addValue = () => "working";
console.log(addValue()); // Corrected: this now logs "working" instead of undefined

//  Try-Catch Block for Error Handling
try {
    let div = 10 / 0; // This is technically valid (will result in Infinity)
    let x = z;        // ReferenceError: z is not defined
    console.log("This will not run due to the error above.");
} catch (error) {
    // Catch and log the error details
    console.log("Error Name:", error.name);       // e.g., ReferenceError
    console.log("Error Message:", error.message); // e.g., z is not defined
    console.log("Stack Trace:\n", error.stack);   // Shows where the error occurred
} finally {
    // This block runs regardless of whether an error occurred
    console.log("Finished error handling block.");
}
