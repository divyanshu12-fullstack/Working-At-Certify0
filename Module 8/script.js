// ==============================
// 🔹 Argument Object (Legacy)
// arguments is NOT a real array
// Only works in traditional functions (not arrow functions)
// ==============================

function showArgument() {
    console.log("All Arguments (as object-like):", arguments);
    console.log(`First Argument: ${arguments[0]}`);
    console.log("Converted to array:", Array.from(arguments)); // Converts to a real array
}
showArgument(11, 2, 4, 5);

// ==============================
// 🔹 Rest Parameter (...fruits)
// Collects remaining arguments into a real array
// Modern and preferred over `arguments`
// ==============================

function showFruits(...fruits) {
    console.log("Fruits Array:", fruits);
    fruits.forEach(fruit => console.log(`Fruit: ${fruit}`));
}
showFruits("apple", "banana", "grapes");

// ==============================
// 🔹 Higher-Order Functions
// Functions are first-class citizens in JavaScript
// Can be passed as arguments or returned
// ==============================

// ===== 🔸 map() =====
// Returns a NEW array with the function applied to each element
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squares = numbers.map(num => num * num);
console.log("Squares of Numbers:", squares);

// ===== 🔸 filter() =====
// Returns a NEW array with only elements that satisfy a condition
const oddNums = numbers.filter(x => x % 2 !== 0);
console.log("Odd Numbers:", oddNums);

// ===== 🔸 reduce() =====
// Reduces array to a single value
// Takes a callback function (accumulator, currentValue) and an initial value
const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of All Numbers:", total);

// ===== 🟡 Even/Odd Sum using filter + reduce =====
const evenSum = numbers
    .filter(num => num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);

const oddSum = numbers
    .filter(num => num % 2 !== 0)
    .reduce((acc, curr) => acc + curr, 0);

console.log(`Even Sum: ${evenSum}, Odd Sum: ${oddSum}`);

// ==============================
// 🔹 Mini Project: Expense Tracker
// Using map, filter, reduce to calculate insights
// ==============================

const expenses = [
    { amount: 500, category: "Food" },
    { amount: 1200, category: "Transport" },
    { amount: 200, category: "Snacks" },
    { amount: 3000, category: "Rent" },
    { amount: 150, category: "Food" },
    { amount: 800, category: "Utilities" },
];

// Total Expenses
const totalExpenses = expenses
    .map(item => item.amount)
    .reduce((acc, curr) => acc + curr, 0);
console.log(`💸 Total Expenses: ₹${totalExpenses}`);

// Total Food Expenses
const foodExpenses = expenses
    .filter(item => item.category === "Food")
    .reduce((acc, curr) => acc + curr.amount, 0);
console.log(`🍔 Total Food Expenses: ₹${foodExpenses}`);

// Large Expenses (amount > 1000)
const largeExpense = expenses.filter(item => item.amount > 1000);
const largeExpenseTotal = largeExpense
    .reduce((acc, curr) => acc + curr.amount, 0);
console.log(`🔥 Large Expenses Total (> ₹1000): ₹${largeExpenseTotal}`);
