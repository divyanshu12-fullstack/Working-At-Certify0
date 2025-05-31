// function sayHello(event) {
//     console.log(event);
//     console.log("SayHello");
// }
// // Method - 2
// const btn = document.getElementById("btn-1");
// btn.onclick = function () {
//     console.log("2nd Button Clicked");
// };
// // click, mouseoveer, mouseout, keydown
// const btn2 = document.getElementById("btn-2");
// btn2.addEventListener("click", () => {
//     alert("Handled the second Button");
// });

//   Event Bubbling

// document.getElementById("child").addEventListener("click", function () {
//     alert("Child Clicked");
// });

// document.getElementById("parent").addEventListener("click", function () {
//     alert("Parent Clicked");
// });

document.getElementById("parent").addEventListener(
    "click",
    function () {
        alert("Parent Captured First");
    },
    true
);

document.getElementById("child").addEventListener("click", function () {
    alert("Child Clicked");
});

// Event Delegation
// Event.target
document.getElementById("button-group").addEventListener("click", function (event) {
    console.log(event);
    if (event.target.tagName === "BUTTON") {
        alert("You clicked: " + event.target.textContent);
    }
});
