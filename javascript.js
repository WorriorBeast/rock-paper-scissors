function getComputerChoice(randomNum) {
    if (randomNum === 1) {
        return 'rock';

    } else if (randomNum === 2) {
        return 'paper';
  
    } else {
        return 'scissor';
    }
}

let playerWinner = 0,
    computerWinner = 0,
    tie = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerWinner++;

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWinner++;

    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerWinner++;

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWinner++;

    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerWinner++;

    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerWinner++;
        
    } else {
        tie++;
    }
}

function game() {
    let playerSelection = this.value;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let computerSelection = getComputerChoice(randomNum);

    getComputerChoice(randomNum);
    playRound(playerSelection, computerSelection);

    document.getElementById('playerScore').textContent = playerWinner;
    document.getElementById('computerScore').textContent = computerWinner;
    document.getElementById('ties').textContent = tie;

    for (i = 0; playerWinner + computerWinner + tie == 5; i++) {
        if (playerWinner > computerWinner) {
            return document.getElementById('gameResult').textContent = 'You are the Winner!';

        } else if (playerWinner < computerWinner) {
            return document.getElementById('gameResult').textContent = "You are the Loser!"

        } else {
            return document.getElementById('gameResult').textContent = "It's a tie!";
        }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', game));

