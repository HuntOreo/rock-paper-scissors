// This is a game that will be played via the console.
// It will take a players input and pin it against the computers input.
// An algorithm will check to see who wins or if there is a draw.

// Computer generates 1 of 3 choices: Rock, Paper, Scissors.
//  The computer will pick 1 of these choices at random.
//   Then the computer will output their choice onto the console.

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

console.log(getComputerChoice());
