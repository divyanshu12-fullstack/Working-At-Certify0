// ----------------------
// ✅ String Declarations
// ----------------------

// Strings can be declared using double quotes "", single quotes '', or backticks ``
let str = "abcdd11123*_+";
console.log(str); // Output: abcdd11123*_+

str = 'Divyanshu';
console.log(str); // Output: Divyanshu

// Backticks allow multi-line strings and variable interpolation
console.log(`Hello how are you
    I am fine`);

// ------------------------
// ✅ String Concatenation
// ------------------------

let firstName = "John";
let secondName = "Wick";

// Using + operator for string concatenation
console.log(firstName + " " + secondName); // Output: John Wick

// Using += operator to append
let str1 = "Hello";
str1 += "World";
console.log(str1); // Output: HelloWorld

// Template Literals - cleaner way to insert variables
console.log("Hello", firstName, "World");            // Output: Hello John World
console.log(`Hello ${firstName} world`);             // Output: Hello John world

// -----------------------------
// ✅ String + Number Behavior
// -----------------------------

let a = 20;
let b = "5";
console.log(a + b); // Output: "205" (number + string = string)

// --------------------------------------------
// ✅ Basic String Methods and Properties
// --------------------------------------------

let language = "JavaScript";

console.log(language.length);           // 10 - total characters
console.log(language.charAt(1));        // a - character at index 1
console.log(language.indexOf("a"));     // 1 - first occurrence of 'a'
console.log(language.lastIndexOf("a")); // 3 - last occurrence of 'a'

console.log(language.toUpperCase());    // JAVASCRIPT
console.log(language.includes("JaS"));  // false - case sensitive
console.log(language.endsWith("pt"));   // true - ends with 'pt'

// -----------------------
// ✅ Trimming Whitespace
// -----------------------

let abc = "   aesds    ";
console.log(abc.trimStart()); // "aesds    "
console.log(abc.trimEnd());   // "   aesds"
console.log(abc.trim());      // "aesds"

// -------------------
// ✅ Slicing & Splitting
// -------------------

let d = "Hello World";

console.log(d.slice(2));        // "llo World" - from index 2 to end
console.log(d.split(" "));      // ["Hello", "World"]

console.log("apple,banana,grape".split(",")); // ["apple", "banana", "grape"]

// ------------------------------------------
// ✅ Function: Check if a String is Palindrome
// ------------------------------------------

function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed === str;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Hello")); // false

// -----------------------------------
// ✅ Function: Mask an Email Address
// -----------------------------------

function maskEmail(email) {
    let parts = email.split("@");
    let userName = parts[0];
    let domain = parts[1];

    // If the username is too short, don't mask
    if (userName.length <= 2) {
        return email;
    }

    // Mask the middle part with '*'
    let firstChar = userName[0];
    let lastChar = userName[userName.length - 1];
    let stars = "*".repeat(userName.length - 2);

    let maskedUser = firstChar + stars + lastChar;
    return maskedUser + "@" + domain;
}

console.log(maskEmail("john.doe@example.com")); // j******e@example.com
console.log(maskEmail("ab@gmail.com"));         // ab@gmail.com
