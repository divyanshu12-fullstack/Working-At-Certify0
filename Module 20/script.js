// ✅ Question 1: Count frequency of elements in an array
const arr = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4];

function countFrequency(arr) {
    // Create an empty object to store frequency counts
    const freq = {};

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]; // Current element

        // If the element already exists in the object, increment its count
        if (freq[element]) {
            freq[element] += 1;
        } else {
            // Otherwise, initialize it with 1
            freq[element] = 1;
        }
    }

    return freq; // Return the frequency object
}

console.log("Q1 ➤ Frequency Count:");
console.log(countFrequency(arr)); // Output: {1: 1, 2: 3, 3: 4, 4: 2}



// ✅ Question 2: Sort array of strings by their lengths
const fruit = ["apple", "is", "a", "fruit"];

function sortByLength(words) {
    // Sort using a comparator based on string length
    return words.sort((a, b) => a.length - b.length);
}

console.log("\nQ2 ➤ Sort by Length:");
console.log(sortByLength(fruit)); // Output: ["a", "is", "apple", "fruit"]



// ✅ Question 3: Reverse words in a sentence
const input = "I love JavaScript";

function reverseWords(str) {
    // Split sentence into words, reverse the array, and join them back into a string
    return str.split(" ").reverse().join(" ");
}

console.log("\nQ3 ➤ Reversed Sentence:");
console.log(reverseWords(input)); // Output: "JavaScript love I"
