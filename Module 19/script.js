// ===========================
// 🎯 Modal and Dropdown Logic
// ===========================

// ========== MODAL SETUP ==========

// ✅ Get modal elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");

// ✅ Open the modal when the button is clicked
openBtn.onclick = () => {
    modal.style.display = "flex"; // show modal with flex layout
};

// ✅ Close the modal when close button (X) is clicked
closeBtn.onclick = () => {
    modal.style.display = "none"; // hide modal
};

// ✅ Close modal if user clicks outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; // hide modal
    }
});


// ========== DROPDOWN SETUP ==========

// ✅ Get dropdown elements
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// ✅ Toggle dropdown when button is clicked
dropdownBtn.onclick = (e) => {
    e.stopPropagation(); // prevent click from bubbling to window
    // toggle dropdown visibility
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
};

// ✅ Close dropdown when clicking anywhere outside it
window.addEventListener("click", () => {
    dropdownMenu.style.display = "none"; // hide dropdown
});
