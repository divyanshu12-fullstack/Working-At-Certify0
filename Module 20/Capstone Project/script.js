// 🔸 Product Data (List of sample products)
const products = [
    {
        id: 1,
        name: "Wireless EarBuds",
        price: "Rs 3000",
        image: "src/earPhone.png",
        inStock: true           // ✅ Available to buy
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "Rs 5000",
        image: "src/smartWatch.png",
        inStock: true
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: "Rs 4000",
        image: "src/mouse.png",
        inStock: false          // ❌ Not available
    }
];

// 🧮 Cart item counter
let cartCount = 0;

// ===========================
// 📌 DOM Elements (References to HTML)
// ===========================
const productList = document.getElementById("productList");       // Where product cards are rendered
const flashMessage = document.getElementById("flashMessage");     // Purchase feedback
const cartCountDisplay = document.getElementById("cartCount");    // Cart icon with count
const searchInput = document.getElementById("searchInput");       // Search bar input

// ===========================
// 🖼️ Function to Render Products
// ===========================
function renderProducts(filteredProducts = products) {
    // Clear the current list
    productList.innerHTML = "";

    // Loop through each product and create a card
    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product"; // Add class for styling

        // HTML template for product
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button
                onclick="buyNow('${product.name}')"
                ${!product.inStock ? "disabled style='background:#ccc;cursor:not-allowed'" : ""}
            >
                ${product.inStock ? "Buy Now" : "Out of Stock"}
            </button>
        `;

        // Append card to the product list container
        productList.appendChild(productCard);
    });
}

// ===========================
// 🛒 Buy Now Handler Function
// ===========================
function buyNow(productName) {
    // Increment cart count
    cartCount++;
    cartCountDisplay.textContent = `🛒 Cart: ${cartCount}`;

    // Show flash message
    flashMessage.textContent = `Thank you for purchasing ${productName}! 🎉`;
    flashMessage.classList.add("show");

    // Auto-hide flash message after 3 seconds
    setTimeout(() => {
        flashMessage.classList.remove("show");
    }, 3000);
}

// ===========================
// 🔎 Search Functionality
// ===========================
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    // Filter products based on search term
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    // Re-render filtered products
    renderProducts(filtered);
});

// 🟢 Initial render of all products on page load
renderProducts();
