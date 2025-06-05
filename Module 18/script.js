// Remove existing native map (for demonstration/testing)
delete Array.prototype.map;

// Check if map doesn't exist
if (!Array.prototype.map) {
    // Define a custom map function
    Array.prototype.map = function (callback) {
        const result = []; // Result array to store transformed values

        for (let i = 0; i < this.length; i++) {
            // Apply callback to each element and store the result
            result.push(callback(this[i], i, this));
        }

        return result; // Return the final mapped array
    };
}

// Test map polyfill
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

delete Array.prototype.reduce;

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback, intialValue) {
        // If array is empty and no initial value is given, throw an error
        if (this.length === 0 && intialValue === undefined) {
            throw new TypeError("Reduce of empty array with no initail value");
        }

        // Initialize the accumulator
        let acc = intialValue !== undefined ? intialValue : this[0];
        // Set starting index: 0 if initial value is given, else 1
        let startIndex = intialValue !== undefined ? 0 : 1;

        // Loop through the array and reduce it using the callback
        for (let i = startIndex; i < this.length; i++) {
            acc = callback(acc, this[i], i, this);
        }

        return acc; // Final reduced value
    }
}

// Test reduce polyfill
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum); // 10


delete Array.prototype.filter;

if (!Array.prototype.filter) {
    Array.prototype.filter = function (callback) {
        const result = []; // To store values that pass the test

        for (let i = 0; i < this.length; i++) {
            // If callback returns true, push element to result
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }

        return result; // Final filtered array
    }
}

// Test filter polyfill
const nums2 = [1, 2, 3, 4, 5];
const even = nums2.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
// Example: throttle on window resize
window.addEventListener('resize', throttle(function () {
    console.log("Window Resized");
}, 1000))


function throttle(func, delay) {
    let lastCall = 0; // Last time the function was executed

    return function (...args) {
        const now = Date.now();

        // Only run function if enough time has passed since last call
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args); // Call the function with correct context and args
        }
    }
}

// Lodash is a powerful utility library that provides many helpful functions:
// - _.map, _.filter, _.reduce (like native ones but more consistent)
// - _.cloneDeep: deep copies objects/arrays
// - _.debounce, _.throttle: performance helpers
// - _.isEqual: deep object comparison
// - _.merge: deep merge of objects
// - _.uniq, _.sortBy, _.groupBy: array/object helpers