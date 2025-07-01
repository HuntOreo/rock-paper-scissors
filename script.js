// This is a game that will be played via the console.
// It will take a players input and pin it against the computers input.
// An algorithm will check to see who wins or if there is a draw.

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
    if (
      humanChoice.toLowerCase() == "rock" ||
      humanChoice.toLowerCase() == "paper" ||
      humanChoice.toLowerCase() == "scissors"
    ) {
      return humanChoice.toLowerCase();
    } else {
      throw new TypeError(`"${humanChoice}" is an Invalid Argument`);
    }
  } catch (error) {
    console.error(error)
    return 'invalid'
  }
};

console.log(`Computer: ${getComputerChoice()}`);
console.log(`Player: ${getHumanChoice()}`);