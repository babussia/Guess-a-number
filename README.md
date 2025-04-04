# Guess-a-number
> A simple command-line game where you guess a number between 1 and 10. You've got three chances—can you beat the odds?


## 🛠️ Installation & Usage

### Installation

1. Clone or download the repository.
2. Ensure you have Node.js installed on your machine.
3. Run the script using:

```bash
npm i
```

```bash
node index.js
```

### Usage
Follow the terminal prompts to guess the number.  
- You have 3 chances to get it right.  
- After the game ends, you’ll be asked if you want to play again.

## 💻 Technologies
- **JavaScript (Node.js)**
- **promt-sync** for user input

## ⚙️ Process
- Defined a random number generator using `Math.random()`. 

```js
let targetNumber =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
 ```    

- Used a `do...while` loop for repeated guesses.  
- Added a counter to limit guesses to three.  
- Used conditional logic to compare guess and target number.  
- Prompted the user to play again after each round.

## 📸 Screenshots
![insert an image](./assets/Screenshot%202025-04-04%20at%2015.29.42.png "hover")

## 🌟 Future Features
- UI version with HTML/CSS for web deployment.



