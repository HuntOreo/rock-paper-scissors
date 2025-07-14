let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button');
const resultElm = document.querySelector('.result');
btns.forEach(elem => {
  elem.addEventListener('click', (event) => {
    const elem = event.target;
    const choice = elem.innerText;
    playGame(choice);
  });
})

// Computer generates 1 of 3 choices: Rock, Paper, Scissors.
function getComputerChoice() {
  const chance = Math.random();

  if (chance >= 0.66) {
    return '🪨';
  } else if (chance <= 0.65 && chance > 0.33) {
    return '📄';
  } else {
    return '✂️';
  }
};

function getResult(playerChoice, computerChoice) {
  if (playerChoice == '🪨') {
    if (computerChoice == '🪨') {
      return declareDraw(playerChoice);
    }
    if (computerChoice == '📄') {
      return declareComputerWins(playerChoice, computerChoice);
    }
    if (computerChoice == '✂️') {
      return declarePlayerWins(playerChoice, computerChoice);
    }
  }

  else if (playerChoice == '📄') {
    if (computerChoice == '🪨') {
      return declarePlayerWins(playerChoice, computerChoice);
    }
    if (computerChoice == '📄') {
      return declareDraw(playerChoice);
    }
    if (computerChoice == '✂️') {
      return declareComputerWins(playerChoice, computerChoice);
    }
  }

  else if (playerChoice == '✂️') {
    if (computerChoice == '🪨') {
      return declareComputerWins(playerChoice, computerChoice);
    }
    if (computerChoice == '📄') {
      return declarePlayerWins(playerChoice, computerChoice);
    }
    if (computerChoice == '✂️') {
      return declareDraw(playerChoice);
    }
  }
}

function playGame(playerChoice) {
  // Reset score.
  playerScore = 0;
  computerScore = 0;

  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  if (resultElm.parentElement.classList.contains('reveal')) {
    resultElm.parentElement.classList.toggle('reveal');
  }
  resultElm.innerText = `
    ${result}
    Current Score:
    Player: ${playerScore} | Computer: ${computerScore}
  `;
};

function declareComputerWins(playerChoice, computerChoice) {
  computerScore++;
  return `Computer Wins \n ${computerChoice} beats ${playerChoice}`;
}

function declarePlayerWins(playerChoice, computerChoice) {
  playerScore++;
  return `Player Wins \n ${playerChoice} beats ${computerChoice}`;
}

function declareDraw(playerChoice) {
  return `Draw \n Both players chose ${playerChoice}`;
}