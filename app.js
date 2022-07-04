// selectors
const guess = document.getElementById("guess-input");










guess.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(guess.value);
  }
});
