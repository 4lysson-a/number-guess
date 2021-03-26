export default function setGameOver(x) {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new Game";
  resetButton.className = "resetButton";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
  resetButton.style.opacity = "0";
  setTimeout(() => {
    resetButton.style.opacity = "1";
  }, x);
}

guessSubmit.addEventListener("click", checkGuess);

guessField.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    checkGuess();
  }
});
