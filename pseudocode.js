/* 

Guess a Number Game
BEGIN

    // Define the range for the random number
    minValue = 1
    minMaxValue = 50

    // Generate a random number for the player to guess
    SET targetNumber = RANDOM NUMBER BETWEEN min_value AND max_value
    SET guessCount = 0

    // Start the guessing loop
    DISPLAY "I'm thinking of a number between ", minValue, " and ", maxValue, ". Can you guess it?"

    REPEAT UNTIL player_guess = target_number
    DO
        // Get the player's guess
        DISPLAY "Enter your guess: "
        INPUT playerGuess
        INCREMENT guessCount BY 1

        // Validate the input (ensure it's a number between minValue and maxValue)
        IF playerGuess < minValue OR playerGuess > maxValue THEN
            DISPLAY "Please enter a number between ", minMalue, " and ", maxMalue, "!"
        ELSE
            // Provide feedback on the guess
            IF playerGuess = targetNumber THEN
                DISPLAY "Congratulations! You guessed the number in ", guessCount, " tries!"
            ELSE IF playerGuess < targetNumber THEN
                DISPLAY "Too low! Try again."
            ELSE
                DISPLAY "Too high! Try again."
            ENDIF
        ENDIF
    UNTIL playerGuess = targetNumber

    // Ask if the player wants to play again
    DISPLAY "Do you want to play again? (yes/no): "
    INPUT play_again
    IF playAgain = "yes" THEN
        REPEAT FROM BEGIN
    ELSE
        DISPLAY "Thanks for playing!"
    ENDIF
END

*/