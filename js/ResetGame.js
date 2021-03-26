export default function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".info p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  document.location.reload(true);
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}
