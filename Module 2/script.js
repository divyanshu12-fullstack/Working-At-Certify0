//  Arithmetic Operators: +, -, *, /, ** (exponentiation), % (modulus), ++, --
console.log(2 ** 3); // 2 raised to the power 3 = 8
console.log(5 % 2);  // Remainder when 5 is divided by 2 = 1

let a = 10;

//  Post-increment/decrement and pre-increment/decrement examples
console.log(a--); // Prints 10, then decrements to 9
console.log(a);   // Now a = 9

//  Assignment Operators: =, +=, -=, *=, **=
let age = 20;
age += 10;         // Adds 10 to age (age = age + 10)
console.log(age);  // Prints 30

a **= 2;           // Raises 'a' to the power of 2 (9 ** 2 = 81)
console.log(a);    // Prints 81

//  Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
let name1 = "21";
let score = 21;
console.log(name1 === score); // false – strict comparison (type + value)

console.log(10 !== 5);        // true – 10 is not equal to 5

// Logical Operators: && (AND), || (OR), ! (NOT)
console.log("Logical Operator");
console.log(10 === 6 && 200 < 11);  // false – both conditions must be true
console.log(10 === 10 || 200 < 11); // true – one condition is true
console.log(!(100 < 5));            // true – 100 < 5 is false, so !false = true

//  Conditionals: if, else if, else
//  Voting Eligibility Checker
let userAge = window.prompt("How Old are You?");
userAge = Number(userAge); // Convert input to a number

if (userAge > 18) {
    console.log("Eligible for voting");
} else if (userAge === 18) {
    console.log("You know you can be the president!!");
} else {
    console.log("Not Eligible");
}

// ❓ Ternary Operator – Compact if-else for assigning max value
let a1 = 200;
let b1 = 500;
let max = a1 >= b1 ? a1 : b1;
console.log(max); // Prints 500

// Nullish Coalescing Operator (??)
// Returns right-hand value only if the left-hand is null or undefined
let userName1;
let defaultName = "Guest";
let finalName = userName1 ?? defaultName;
console.log(finalName); // Prints "Guest"
