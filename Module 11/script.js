
// DOM - Document Object Manipulation

// Selection of Tags/ Html elements
let heading = document.getElementById("heading");
console.log(heading);

let heading2 = document.getElementsByClassName("heading2");
let a = document.getElementsByTagName("h1");
console.log(a);

let heading4 = document.querySelector(".heading2");
console.log(heading4)

// Text Manipulation
heading.textContent += "Divyanshu";
a[1].textContent = "Hello Duniya";

heading4.innerHTML += "<strong>Divyanshu</strong>"

