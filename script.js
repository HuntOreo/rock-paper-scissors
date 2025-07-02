// This is a game that will be played via the console.
// It will take a players input and pin it against the computers input.
// An algorithm will check to see who wins or if there is a draw.
// The game will also keep track of scores between the computer and the player.

// Global variables.
let humanScore = 0;
let computerScore = 0;

// Computer generates 1 of 3 choices: Rock, Paper, Scissors.
//  The computer will pick 1 of these choices at random.
//   Returns the choice made for future use.
function getComputerChoice() {

  const chance = Math.random();

  if (chance >= 0.66) {
    return 'rock';
  } else if (chance <= 0.65 && chance > 0.33) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// A prompt will ask for a players choice
//  The player must provide a choice between Rock, Paper, Scissors.
//   If a choice is given outside of the scope, an error is provided.
//    The console will provide feedback to the player by logging the input.
function getHumanChoice() {
  let humanChoice;
  try {
    humanChoice = prompt('Rock, Paper, or Scissors?');
    const humanChoiceFormatted = humanChoice.toLowerCase()
    if (
      humanChoiceFormatted == "rock" ||
      humanChoiceFormatted == "paper" ||
      humanChoiceFormatted == "scissors"
    ) {
      return humanChoiceFormatted;
    } else {
      throw new TypeError(`"${humanChoice}" is an Invalid Argument`);
    }
  } catch (error) {
    console.error(error);
    return 'invalid';
  }
};

// Receive the player and computer choices.
//  Compare the choices and determine who is a victor.
//   If there is no victor, declare a draw.
//    Ask the player if they wish to go again.
function playRound(humanChoice, computerChoice) {

  if (humanChoice == 'rock') { // Rock
    if (computerChoice == 'paper') {
      computerScore++;
      return `Computer Wins \n ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice == 'scissors') {
      humanScore++;
      return `Player Wins \n ${humanChoice} beats ${computerChoice}`;
    } else {
      return `Draw \n Both players chose ${humanChoice}`;
    }
  } else if (humanChoice == 'paper') { // Paper
    if (computerChoice == 'rock') {
      humanScore++;
      return `Player Wins \n ${humanChoice} beats ${computerChoice}`;
    } else if (computerChoice == 'scissors') {
      computerScore++;
      return `Computer Wins \n ${computerChoice} beats ${humanChoice}`;
    } else {
      return `Draw \n Both players chose ${humanChoice}`;
    }
  } else { // Scissors
    if (computerChoice == 'rock') {
      computerScore++;
      return `Computer Wins \n ${computerChoice} beats ${humanChoice}`;
    } else if (computerChoice == 'paper') {
      humanScore++;
      return `Player Wins \n ${humanChoice} beats ${computerChoice}`;
    } else {
      return `Draw \n Both players chose ${humanChoice}`;
    }
  }
}

// Will play 5 rounds in total.
//  On the 5th round, it will log the total score and declare a winner.
function playGame() {
  let round = 1;

  // Reset score.
  humanScore = 0;
  computerScore = 0;

  while (round <= 5) {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(`${result} \n Current Score: \n Player: ${humanScore} | Computer: ${computerScore}`);
    round++;
  }

  if (humanScore > computerScore) {
    const replayBool = confirm(`You Win!!! \n total score: \n Player: ${humanScore} | Computer: ${computerScore} \n Play again?`);

    if (replayBool) {
      playGame();
    }
  } else if (computerScore > humanScore) {
    const replayBool = confirm(`Computer Wins... \n total score: \n Player: ${humanScore} | Computer: ${computerScore} \n Play again?`);

    if (replayBool) {
      playGame();
    }
  } else {
    const replayBool = confirm(`Draw! \n total score: \n Player: ${humanScore} | Computer: ${computerScore} \n Play again?`);

    if (replayBool) {
      playGame();
    }
  }
};

playGame();