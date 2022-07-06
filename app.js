// selectors
const guess = document.getElementById("guess-input");
const guesses = document.querySelector(".guesses");
// const guessCounter = document.querySelector(".guess-counter");
const resetButton = document.querySelector(".reset-btn");
const submitButton = document.querySelector(".submit-btn");
const range = document.querySelectorAll(".range");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const afterGame = document.querySelectorAll(".after");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");

guess.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(guess.value);
    submitButton.click();
  }
});

// random number
let number = Math.floor(Math.random() * 100 + 1); // random number between 1-100
console.log(number);

// too high, too low
submitButton.addEventListener("click", function () {
  if (guess.value > number) {
    range.forEach((e) => {
      if (!e.classList.contains("hidden")) {
        e.classList.add("hidden");
      }
    });
    high.classList.remove("hidden");
    guesses.innerHTML += " " + guess.value;
  }

  if (guess.value < number) {
    range.forEach((e) => {
      if (!e.classList.contains("hidden")) {
        e.classList.add("hidden");
      }
    });
    low.classList.remove("hidden");
    guesses.innerHTML += " " + guess.value;
  }
});

// reset the number
resetButton.addEventListener("click", function () {
  window.location = window.location;
});
