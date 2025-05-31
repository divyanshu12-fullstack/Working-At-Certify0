const words = ["apple", "banana", "grape", "kiwi", "orange", "lemon", "mango", "watermelon", "berry", "peach"];
const wordDisplay = document.getElementById("word-display");
const input = document.getElementById("input");
const scoreDisplay = document.getElementById("score");

score = 0;
function getRandomWords() {
    return words[Math.floor(Math.random() * words.length)];
}
let currentWord = getRandomWords();
wordDisplay.textContent = currentWord;

input.addEventListener("input", function () {
    if (input.value === currentWord) {
        score++;
        scoreDisplay.textContent = score;
        input.value = "";
        currentWord = getRandomWords();
        wordDisplay.textContent = currentWord;
    }
})