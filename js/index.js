let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += `${userGuess} `;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You won!";
    lastResult.style.backgroundColor = "green";
    lastResult.style.padding = "10px";
    lowOrHigh.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lastResult.style.backgroundColor = "red";
    lowOrHigh.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Guess was too low!";
      guesses.style.backgroundColor = "yellow";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "Guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
}
const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
