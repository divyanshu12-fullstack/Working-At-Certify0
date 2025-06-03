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
