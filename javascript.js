let randomNum = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(randomNum) {
    if (randomNum === 1) {
        return 'rock';

    } else if (randomNum === 2) {
        return 'paper';
  
    } else {
        return 'scissor';
    }
}

let computerSelection = getComputerChoice(randomNum);

let playerSelection = '';

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('What will you choose:\nrock, paper, or scissor?', playerSelection).toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return alert('You are the round winner! Rock beats scissor.');
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return alert('You are the round winner! Paper beats rock.');
       
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
       return alert('You are the round winner! Scissor beats paper.');
        
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return alert('Good luck next round! Paper beats rock.');
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return alert('Good luck next round! Scissor beats paper.');

    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return alert('Good luck next round! Rock beats scissor.');
        
    } else {
        return alert('It\'s a tie!');
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        let computerSelection = getComputerChoice(randomNum);
        console.log(randomNum);
        console.log(getComputerChoice(randomNum));
        playRound(playerSelection, computerSelection);
    }
}
game();