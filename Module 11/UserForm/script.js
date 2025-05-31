const name = prompt("What is your Name: ");
const color = prompt("What is your favorite color: ")
const hobby = prompt("What is your hobby? ")

document.getElementById("name-text").textContent += ` ${name}`;
document.getElementById("color-text").textContent += ` ${color}`;
document.getElementById("hobby-text").textContent += ` ${hobby}`;

document.body.style.backgroundColor = color;