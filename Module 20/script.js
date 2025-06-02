// Question 1
const arr = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4];

function countFrequency(arr) {
    const freq = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (freq[element]) {
            freq[element] += 1;
        } else {
            freq[element] = 1;
        }
    }
    return freq;
}

console.log(countFrequency(arr));

// Question 2
Input: ["apple", "is", "a", "fruit"]

function sortByLength(words) {
    return words.sort((a, b) => a.length - b.length);
}
const fruit = ["apple", "is", "a", "fruit"];
console.log(sortByLength(fruit));

// Question 3

// Input: "I love JavaScript" ["i", "Love", "Javascript"] -> ["Javascript", "love", "I"]
// Output: "JavaScript love I"

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

const input = "I love JavaScript";
console.log(reverseWords(input));