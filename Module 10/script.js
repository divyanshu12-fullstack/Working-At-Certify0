// ========================================================
// ✅ Question 1: Vowel Remover
// Write a function that removes all vowels (a, e, i, o, u) from a string.
// The function should be case-insensitive and return only consonants.
// ========================================================

function removeVowels(str) {
    let vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isVowel = false;

        // Check if the current character is a vowel
        for (let j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                isVowel = true;
                break;
            }
        }

        // If not a vowel, add to result
        if (!isVowel) {
            result += char;
        }
    }

    return result;
}

console.log("Vowel Remover Results:");
console.log(removeVowels("Hello World"));            // "Hll Wrld"
console.log(removeVowels("Divyanshu Dwivedi"));      // "Dvy nsh Dwvd"
console.log("");

// ========================================================
// ✅ Question 2: Unique Characters
// Return a string with only the unique characters from the original input string,
// preserving the order of their first occurrence.
// ========================================================

function getUniqueChar(str) {
    const seen = new Set();
    let result = "";

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

console.log("Unique Character Results:");
console.log(getUniqueChar("aaaaabbbbbddddfff"));     // "abdf"
console.log(getUniqueChar("Programming"));           // "Progamin"
console.log("");

// ========================================================
// ✅ Question 3: Mini Array.from() Polyfill
// Mimic the behavior of JavaScript's Array.from() method.
// It should convert array-like or iterable objects into actual arrays.
// ========================================================

function miniArrayFrom(input) {
    var result = [];

    if (input == null) {
        throw new TypeError("Cannot convert undefined or null to an Array");
    }

    // Check if it's array-like (has a numeric length)
    if (typeof input.length === "number") {
        for (let i = 0; i < input.length; i++) {
            result.push(input[i]);
        }
    }

    return result;
}

console.log("Mini Array.from() Results:");
console.log(miniArrayFrom("Hello World"));           // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(miniArrayFrom([1, 2, 3, 56]));            // [1, 2, 3, 56]
console.log(miniArrayFrom({ 0: "a", 1: "b", length: 2 })); // ['a', 'b']
console.log("");

// ========================================================
// ✅ Question 4: User Data Formatter
// Format user data into structured console output.
// Properly capitalize names, handle missing fields, and format dates.
// ========================================================

var users = [
    {
        name: "alice johnson",
        age: 25,
        gender: "female",
        email: "alice@example.com",
        city: "New York",
        joined: "2022-04-10"
    },
    {
        name: "bob smith",
        age: 30,
        gender: "male",
        city: "Los Angeles",
        joined: "2021-09-15"
    },
    {
        name: "charlie",
        age: 22,
        gender: "male",
        email: null,
        city: "Chicago",
        joined: "2023-01-01"
    }
];

// Helper to convert name to Title Case
function toTitleCase(str) {
    return str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}

// Helper to format date into dd-mm-yyyy
function formatDate(dateStr) {
    var date = new Date(dateStr);
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log("User Data Formatter:");
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let title = user.gender === "male" ? "Mr." : "Ms.";
    let name = toTitleCase(user.name || "Unknown");
    let email = user.email || "Not Provided";
    let city = user.city || "Unknown";
    let age = user.age || "Unknown";
    let dateJoined = formatDate(user.joined || "2000-01-01");

    console.log(`User #${i + 1}`);
    console.log("=".repeat(30));
    console.log(`Name       : ${title} ${name}`);
    console.log(`Age        : ${age}`);
    console.log(`Email      : ${email}`);
    console.log(`City       : ${city}`);
    console.log(`Joined On  : ${dateJoined}`);
    console.log("");
}
