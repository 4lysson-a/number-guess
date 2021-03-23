let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector(".guesses");
const points = document.querySelector(".points");

const card = document.querySelector(".info");
const lastResult = document.querySelector(".lastResult");
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

  if (userGuess === randomNumber) {
    lastResult.textContent = "Parabéns, você é bom !!";
    card.style.backgroundColor = "green";
    lowOrHi.textContent = randomNumber;
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! Fim de jogo :( !!!";
    userPoints -= 10;
    setGameOver();
    setTimeout(() => {
      card.style.opacity = "0";
    }, 1000);
  } else {
    userPoints -= 10;
    lastResult.textContent = "Errado!";
    card.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Muito baixo! ";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Muito alto! ";
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
  resetButton.style.opacity = "0";
  resetButton.textContent = "Começar um novo jogo";
  resetButton.className = "resetButton";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
  setTimeout(() => {
    resetButton.style.opacity = "1";
  }, 1000);
}

guessSubmit.addEventListener("click", checkGuess);

guessField.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    checkGuess();
  }
});
