function game() {

  // Variable generates a random number
  var rand = Math.floor((Math.random() * 100) + 1);

  // Define variable userGuess
  var userGuess;
  var triesCounter=0;

  // Ask the user for his/her name
  var userName = prompt("Welcome to Hi/Lo. What is your name?");

  // The while loop says that after 7 tries the function will stop running
  do {
    triesCounter++;

    // Welcomes user and asks for them to input a number in the range 1 to 100
    userGuess = prompt("Hi " + userName + "! You have 7 tries to guess the number. Guess number: " + triesCounter + " Please input a number between 1 & 100: ");

    // Conditional to see if user entered a number or if the number is too high or low
    if (userGuess != rand){
      if (isNaN(userGuess)) { alert("Your guess must be a number, try again. ");
      } else if (userGuess > rand) {
        alert("Your number is too high!");
      } else {
        alert("Your number is too low!");
      }
    }
  } while ((userGuess != rand) && (triesCounter<=6));

  // Conditional statement saying the amount of tries must be less than or equal to 7
  if(triesCounter<=6) {
    alert("Congratulations " + userName + "! You win!");
  } else {
    alert("Sorry " + userName + ",  you lose. No more tries!");
  };
};
