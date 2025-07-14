

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

function getPlayerChoice(playerChoice) {

  if (typeof (playerChoice) === undefined) {
    let humanChoiceInput;
    try {
      humanChoiceInput = prompt('Rock, Paper, or Scissors?');
      const humanChoiceFormatted = humanChoiceInput.toLowerCase()
      if (
        humanChoiceFormatted == "rock" ||
        humanChoiceFormatted == "paper" ||
        humanChoiceFormatted == "scissors"
      ) {
        return humanChoiceFormatted;
      } else {
        throw new TypeError(`"${humanChoiceInput}" is an Invalid Argument`);
      }
    } catch (error) {
      console.error(error);
      return 'invalid';
    }
  } else {
    console.log('test');
  }
}


function playRound(humanChoice, computerChoice) {

  if (humanChoice === '🪨') {
    if (computerChoice === '🪨') { }
    if (computerChoice === '🪨') { }
    if (computerChoice === '🪨') { }
  }

  else if (humanChoice === '📄') {
    if (computerChoice === '🪨') { }
    if (computerChoice === '🪨') { }
    if (computerChoice === '🪨') { }

  }

  else if (humanChoice === '✂️') {
    if (computerChoice === '🪨') { }
    if (computerChoice === '🪨') { }
    if (computerChoice === '🪨') { }

  }

  // if (humanChoice == 'rock') { // Rock
  //   if (computerChoice == 'paper') {
  //     computerScore++;
  //     return `Computer Wins \n ${computerChoice} beats ${humanChoice}`;
  //   } else if (computerChoice == 'scissors') {
  //     humanScore++;
  //     return `Player Wins \n ${humanChoice} beats ${computerChoice}`;
  //   } else {
  //     return `Draw \n Both players chose ${humanChoice}`;
  //   }
  // } else if (humanChoice == 'paper') { // Paper
  //   if (computerChoice == 'rock') {
  //     humanScore++;
  //     return `Player Wins \n ${humanChoice} beats ${computerChoice}`;
  //   } else if (computerChoice == 'scissors') {
  //     computerScore++;
  //     return `Computer Wins \n ${computerChoice} beats ${humanChoice}`;
  //   } else {
  //     return `Draw \n Both players chose ${humanChoice}`;
  //   }
  // } else { // Scissors
  //   if (computerChoice == 'rock') {
  //     computerScore++;
  //     return `Computer Wins \n ${computerChoice} beats ${humanChoice}`;
  //   } else if (computerChoice == 'paper') {
  //     humanScore++;
  //     return `Player Wins \n ${humanChoice} beats ${computerChoice}`;
  //   } else {
  //     return `Draw \n Both players chose ${humanChoice}`;
  //   }
  // }
}

// Will play 5 rounds in total.
//  On the 5th round, it will log the total score and declare a winner.
function playGame(playerChoice) {
  let round = 1;

  // Reset score.
  humanScore = 0;
  computerScore = 0;

  const humanChoice = getPlayerChoice(playerChoice);
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  console.log(`
    ${result} \n Current Score: \n 
    Player: ${humanScore} | 
    Computer: ${computerScore}`
  );

  if (humanScore > computerScore) {
    const replayBool = confirm(`
      You Win!!! \n 
      total score: \n 
      Player: ${humanScore} | 
      Computer: ${computerScore} \n 
      Play again?`
    );

    if (replayBool) {
      playGame();
    }
  } else if (computerScore > humanScore) {
    const replayBool = confirm(`
      Computer Wins... \n 
      total score: \n 
      Player: ${humanScore} | 
      Computer: ${computerScore} \n 
      Play again?`
    );

    // if (replayBool) {
    //   playGame();
    // }
  } else {
    const replayBool = confirm(`Draw! \n 
      total score: \n 
      Player: ${humanScore} | 
      Computer: ${computerScore} \n 
      Play again?`
    );

    // if (replayBool) {
    //   playGame();
    // }
  }
};

function declareComputerWins(computerChoice, playerChoice) {

}

function declarePlayerWins(playerChoice, computerChoice) {

}

function declareDraw(playerChoice, computerChoice) {

}

const btns = document.querySelectorAll('button');
btns.forEach(elem => {
  elem.addEventListener('click', playGame(elem.innerText))
})