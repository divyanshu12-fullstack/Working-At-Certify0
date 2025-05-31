// Array Basics
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits); // object

// ✅ push(): Adds item to the end
fruits.push("grapes");
console.log(fruits);

// ✅ pop(): Removes the last item
let x = fruits.pop();
console.log(x); // "grapes"
console.log(fruits);

// ✅ unshift(): Adds item(s) to the start
fruits.unshift("watermelon", "guava");
console.log(fruits);

// ✅ shift(): Removes the first item
x = fruits.shift();
console.log(x); // "watermelon"
console.log(fruits);

// ✅ length: Total number of items
console.log(fruits.length);

// ✅ concat(): Merges arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1,2,3,4,5,6,7,8,9]
console.log(arr1); // original remains unchanged

// ✅ splice(startIndex, deleteCount, newItems...)
// Remove 4 elements from index 3
arr3.splice(3, 4);
console.log(arr3); // [1,2,3,8,9]

// Insert values at index 3
arr3.splice(3, 0, 11, 15, 30);
console.log(arr3);

// Replace 2 values at index 3
arr3.splice(3, 2, 17, 55);
console.log(arr3);

// ✅ sort(): Sorts in-place (default = lexicographic)
console.log(fruits.sort()); // sorted alphabetically
console.log(arr3.sort()); // incorrect sort for numbers

// ✅ Numerical sort (ascending)
console.log(arr3.sort((a, b) => a - b));

// ✅ Numerical sort (descending)
console.log(arr3.sort((a, b) => b - a));

console.log("Spread Operator");

// ✅ Spread operator: expands elements
let arr4 = [1, 2, 3, 4, 5];
console.log(...arr4); // 1 2 3 4 5

let copy = [...arr4]; // copy array
console.log(copy);

let merged = [...arr4, ...copy]; // merge two arrays
console.log(merged);

let str = "Heplo";
let arrStr = [...str]; // spread string into array
console.log(arrStr); // ['H','e','p','l','o']

// ✅ Destructuring
const [var1, var2] = arrStr; // first two letters
console.log(var1); // 'H'

const [, , , var4] = arrStr; // fourth letter
console.log(var4); // 'l'

let a = 5;
let b = 10;
[a, b] = [b, a]; // swap values
console.log(a, b); // 10 5

const user = { name: "dd", age: 21 };
const { name } = user; // object destructuring
console.log(name); // 'dd'

/* -----------------------
   📋 To-Do List Manager
------------------------ */

let todoList = ["Buy groceries", "Read a book"];

// ✅ Add a task
function addTask(task) {
    todoList.push(task);
    console.log(`Added: ${task}`);
}

// ✅ Remove a task by index
function removeTask(index) {
    const removed = todoList.splice(index, 1);
    console.log(`Removed: ${removed[0]}`);
}

// ✅ List all tasks
function listTasks() {
    for (let i = 0; i < todoList.length; i++) {
        console.log(`Task ${i + 1}: ${todoList[i]}`);
    }
}

// ✅ Sort tasks alphabetically
function sortTasks() {
    todoList.sort();
    console.log(`Sorted List: ${todoList}`);
}

// ✅ Merge two lists using spread
function mergeLists(mergeList) {
    todoList = [...todoList, ...mergeList]; // Use spread
    console.log("Merged List:", todoList);
}

// 🧪 Function Calls (Demo)
addTask("Complete homework");
addTask("Exercise");
listTasks();

removeTask(1); // removes "Read a book"
listTasks();

sortTasks();
listTasks();

mergeLists(["Visit doctor", "Call Boss"]);
listTasks();
