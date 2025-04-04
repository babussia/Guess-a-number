const prompt = require("prompt-sync")();

// function guessNumber() {
//   // Range for the random number
//   const minValue = 1;
//   const maxValue = 10;

//   // Generate a random number between min and max
//   const targetNumber =
//     Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

//   let playerGuess = parseInt(
//     prompt(`Guess a number from ${minValue} to ${maxValue}. `)
//   );

//   if (playerGuess < minValue || playerGuess > maxValue) {
//     console.log(`Please enter a number between ${minValue} and ${maxValue}!`);
//   }

//   if (playerGuess === targetNumber) {
//     console.log("Congratulations! You guessed the number!");
//   } else if (playerGuess < targetNumber) {
//     console.log("Too low! Try again.");
//   } else {
//     console.log("Too high! Try again.");
//   }
// }

// guessNumber();

function guessNumber() {
  // Range for the random number
  const minValue = 1;
  const maxValue = 10;

  // Generate a random number between min and max
  let targetNumber =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  let guessCount = 0;
  let playerGuess;

  console.log(
    `I'm thinking of a number between ${minValue} and ${maxValue}. Can you guess it?`
  );

  do {
    playerGuess = parseInt(prompt("Enter your guess: "));
    guessCount++;

    if (playerGuess < minValue || playerGuess > maxValue) {
      console.log(`Please enter a number between ${minValue} and ${maxValue}!`);
    } else {
      if (playerGuess === targetNumber) {
        console.log(
          `Congratulations! You guessed the number in ${guessCount} tries!`
        );
      } else if (playerGuess < targetNumber) {
        console.log("Too low! Try again.");
      } else {
        console.log("Too high! Try again.");
      }
    }
  } while (playerGuess !== targetNumber && guessCount < 3);

  if (guessCount >= 3 && playerGuess !== targetNumber) {
    console.log(
      `Sorry, you've used all your attempts! The number was ${targetNumber}.`
    );
  }
  // Ask if the player wants to play again
  const playAgain = prompt("Do you want to play again? (yes/no): ");
  if (playAgain.toLowerCase() === "yes") {
    guessNumber();
  } else {
    console.log("Thanks for playing!");
  }
}
guessNumber();
