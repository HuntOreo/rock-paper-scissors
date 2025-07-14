let playerScore = 0;
let computerScore = 0;
let round = 0;

const btns = document.querySelectorAll('button');
const resultElm = document.querySelector('.result');
const headerElm = document.querySelector('h1');
const roundElm = document.querySelector('.round');
const victorElm = document.querySelector('.victor');

btns.forEach(elem => {
  elem.addEventListener('click', (event) => {
    const elem = event.target;
    const choice = elem.innerText;
    playGame(choice);
  });
});

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
};

function declareComputerWins(playerChoice, computerChoice) {
  computerScore++;
  return `Computer Wins \n ${computerChoice} beats ${playerChoice}`;
};

function declarePlayerWins(playerChoice, computerChoice) {
  playerScore++;
  return `Player Wins \n ${playerChoice} beats ${computerChoice}`;
};

function declareDraw(playerChoice) {
  return `Draw \n Both players chose ${playerChoice}`;
};

function renderVictor(playerScore, computerScore) {
  if (playerScore > computerScore) {
    victorElm.textContent = `
      Player Won!
      Final Score:
      Player: ${playerScore} | Computer: ${computerScore}
    `;
  } else if (computerScore > playerScore) {
    victorElm.textContent = `
      Computer Won!
      Final Score:
      Player: ${playerScore} | Computer: ${computerScore}
    `;
  } else {
    victorElm.textContent = `
      Draw!
      Final Score:
      Player: ${playerScore} | Computer: ${computerScore}
    `;
  }

  if (victorElm.classList.contains('hide')) {
    victorElm.classList.toggle('hide');
  }
};

function playGame(playerChoice) {
  round++
  roundElm.textContent = `Round: ${round}`;

  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  if (resultElm.parentElement.classList.contains('hide')) {
    resultElm.parentElement.classList.toggle('hide');
  }

  resultElm.innerText = result;

  if (round === 5) {
    renderVictor(playerScore, computerScore);

    // Reset score and round
    round = 0;
    playerScore = 0;
    computerScore = 0;
  }
};