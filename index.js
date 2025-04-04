const prompt = require("prompt-sync")();

function guessNumber() {
  // Range for the random number
  const minValue = 1;
  const maxValue = 10;

  // Generate a random number between min and max
  const targetNumber =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  let playerGuess = parseInt(
    prompt(`Guess a number from ${minValue} to ${maxValue}. `)
  );

  if (playerGuess < minValue || playerGuess > maxValue) {
    console.log(`Please enter a number between ${minValue} and ${maxValue}!`);
  }

  if (playerGuess === targetNumber) {
    console.log("Congratulations! You guessed the number!");
  } else if (playerGuess < targetNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }
}

guessNumber();
