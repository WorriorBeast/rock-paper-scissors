let computerChoice = Math.floor(Math.random() * 3);

function getComputerChoice() {
    if (computerChoice === 0) {
        return 'rock';

    } else if (computerChoice === 1) {
        return 'paper';

    } else {
        return 'scissor';
    }
}

let computerSelection = getComputerChoice();

let playerSelection = prompt('What will you choose: rock, paper, or scissor?', '').toLowerCase();

function playRound(playerSelection, computerSelection) {
    let gameWinner;
 
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return gameWinner = alert('You are the round winner! Rock beats scissor.');

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return gameWinner = alert('You are the round winner! Paper beats rock.');

    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return gameWinner = alert('You are the round winner! Scissor beats paper.');

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return gameWinner = alert('Good luck next round! Paper beats rock.');

    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return gameWinner = alert('Good luck next round! Scissor beats paper.');
    
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return gameWinner = alert('Good luck next round! Rock beats scissor.');

    } else {
        return gameWinner = alert('It\'s a tie!');
    }
}

playRound(playerSelection, computerSelection);