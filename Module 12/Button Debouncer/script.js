const button = document.getElementById("debounce-btn");
const output = document.getElementById("output");

function timeDelayGenerator(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay)
    }
}

function handleClick() {
    output.textContent = "Button clicked at: " + new Date().toLocaleTimeString();
}

const debounceClick = timeDelayGenerator(handleClick, 1000);

button.addEventListener("click", debounceClick)