// selectors
const guess = document.getElementById("guess-input");
const range = document.querySelectorAll(".range");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const resetButton = document.querySelector(".reset-btn");
const submitButton = document.querySelector(".submit-btn");

guess.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(guess.value);
    submitButton.click();
  }
});

// random number
let number = Math.floor(Math.random() * 100);
console.log(number);

submitButton.addEventListener("click", function () {
  if (guess.value > number) {
    range.forEach((e) => {
      if (!e.classList.contains("hidden")) {
        e.classList.add("hidden");
      }
    });
    high.classList.remove("hidden");
  }

  if (guess.value < number) {
    range.forEach((e) => {
      if (!e.classList.contains("hidden")) {
        e.classList.add("hidden");
      }
    });
    low.classList.remove("hidden");
  }
});

// click event
resetButton.addEventListener("click", function () {
  window.location = window.location;
});
