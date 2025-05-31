// Variable declarations using var, let, and const
var x = 45; // 'var' allows redeclaration and has function scope
console.log(x);

// Constant declaration (cannot be reassigned)
const PI = 3.14; // Naming convention for constants: uppercase with underscores (e.g., GRAVITY_CONSTANT)

// Invalid variable names examples (commented for reference):
// ab, a, b - okay but not descriptive
// 47name, *uiuas - invalid: cannot start with numbers or special characters except _ and $
// return, for - invalid: reserved keywords
// PI, GRAVITY_CONSTANT - valid and commonly used for constants

// --------------------
// Primitive Data Types
let name = "Divyanshu"; // string
let age = 21.6;          // number
console.log(typeof age); // outputs the type of 'age'

let isActive = false;    // boolean

// --------------------
// Non-Primitive Data Types
let person = { name: "DD", age: 30 }; // object
let arr = [1, 2, 3, 4, 5];            // array (a type of object)
console.log(arr);
console.log(arr.length);             // outputs number of elements in array

// --------------------
// Type Conversion
let strAge = String(age);            // converts number to string
console.log(strAge);
console.log(typeof strAge);          // check the new type

let intName = Number("DD");          // tries to convert non-numeric string to number (results in NaN)
console.log(intName);

let ageBool = Boolean(age);          // converts number to boolean (non-zero is true)
console.log(ageBool);
// Note: 0, null, "", undefined -> all are falsy values

// --------------------
// User Input (form-like interaction)
let userName = window.prompt("Please provide your name: ");        // prompts user for name
let userAge = window.prompt("Provide Your Age: ");                 // prompts user for age
let phoneNumber = window.prompt("Please provide you phone num:"); // prompts user for phone number

console.log(userName);     // displays entered name
console.log(userAge);      // displays entered age
console.log(phoneNumber);  // displays entered phone number
