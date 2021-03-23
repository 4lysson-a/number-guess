let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector(".guesses");
const points = document.querySelector(".points");

const lastResult = document.querySelector(".lastResult");
const card = document.querySelector(".info");
card.style.opacity = "0";

const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
let userPoints = 100;

guessField.focus();

function checkGuess() {
  let userGuess = Number(guessField.value);
  guesses.textContent += userGuess + " ";
  card.style.opacity = "1";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    card.style.backgroundColor = "green";
    lowOrHi.textContent = randomNumber;
    setGameOver();
    setTimeout(() => {
      card.style.opacity = "0";
    }, 1000);
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! GAME OVER !!!";
    userPoints -= 10;
    setGameOver();
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

function resetGame() {
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

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new Game";
  resetButton.className = "resetButton";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

guessSubmit.addEventListener("click", checkGuess);

guessField.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    checkGuess();
  }
});
