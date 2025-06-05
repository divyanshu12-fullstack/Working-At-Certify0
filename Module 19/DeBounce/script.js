// ==========================
// 🍎 Live Search with Debounce
// ==========================

// ✅ Sample data (search source)
const fruits = [
    "Apple", "Banana", "Blueberry", "Cherry", "Grape",
    "Kiwi", "Mango", "Orange", "Peach", "Pineapple",
    "Raspberry", "Strawberry", "Watermelon"
];

// ✅ DOM elements
const input = document.getElementById("searchInput");    // input field
const resultList = document.getElementById("resultList"); // ul list to show results

// ✅ Debounce Utility Function
// Purpose: Prevents a function from running too frequently
// It waits for a pause in user activity before executing the function
function debounce(fn, delay) {
    let timer; // stores timeout ID

    return function (...args) {
        clearTimeout(timer); // cancel any previously scheduled call
        timer = setTimeout(() => {
            fn.apply(this, args); // call function after 'delay'
        }, delay);
    };
}

// ✅ Search Function
// Filters the fruits array based on input value
function searchFruits(event) {
    const query = event.target.value.toLowerCase().trim(); // sanitize input

    // If input is empty, show no results
    if (query === "") {
        displayResults([]); // show 'No match found'
        return;
    }

    // Filter fruits that include the search query
    const filtered = fruits.filter(fruit =>
        fruit.toLowerCase().includes(query)
    );

    displayResults(filtered); // update the UI
}

// ✅ Display Results Function
// Renders the filtered fruits into the DOM
function displayResults(results) {
    resultList.innerHTML = ""; // clear previous results

    // If no matches found
    if (results.length === 0) {
        resultList.innerHTML = "<li>No match found.</li>";
        return;
    }

    // Display each matching fruit
    results.forEach(fruit => {
        const li = document.createElement("li");
        li.textContent = fruit;
        resultList.appendChild(li);
    });
}

// ✅ Debounced Version of Search Function
const debouncedSearch = debounce(searchFruits, 500); // 500ms delay

// ✅ Event Listener
// Triggers on every input, but the actual function runs only after pause
input.addEventListener("input", debouncedSearch);
