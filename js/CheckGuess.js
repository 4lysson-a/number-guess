export default function checkGuess() {
  let userGuess = Number(guessField.value);
  guesses.textContent += userGuess + " ";
  card.style.opacity = "1";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    card.style.backgroundColor = "green";
    lowOrHi.textContent = randomNumber;
    setGameOver(5000);
    setTimeout(() => {
      card.style.opacity = "0";
    }, 5000);
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! GAME OVER !!!";
    userPoints -= 10;
    setGameOver(1000);
    setTimeout(() => {
      card.style.opacity = "0";
    }, 1000);
  } else {
    userPoints -= 10;
    lastResult.textContent = "Wrong!";
    card.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Too low! ";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Too high! ";
    }
  }

  points.textContent = userPoints;
  guessCount++;
  guessField.value = "";
  guessField.focus();
}
