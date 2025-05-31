const products = [
    { id: 1, name: "Smartphone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Television" },
];

const wishlist = [];

const productContainer = document.getElementById("products");
const wishlistContainer = document.getElementById("wishlist");

function renderProducts() {
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
        <strong>${product.name}</strong>
        <br>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
      `;
        productContainer.appendChild(div);
    });
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        renderWishlist();
    }
}

function renderWishlist() {
    wishlistContainer.innerHTML = "";
    wishlist.forEach(item => {
        const div = document.createElement("div");
        div.className = "wishlist-item";
        div.innerText = item.name;
        wishlistContainer.appendChild(div);
    });
}

renderProducts();