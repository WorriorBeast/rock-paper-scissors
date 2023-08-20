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
let playerWinner = 0,
    computerWinner = 0,
    tie = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('What will you choose:\nrock, paper, or scissor?', playerSelection).toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerWinner++;
        return alert('You are the round winner! Rock beats scissor.');
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWinner++;
        return alert('You are the round winner! Paper beats rock.');
       
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerWinner++;
       return alert('You are the round winner! Scissor beats paper.');
        
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWinner++;
        return alert('Good luck next round! Paper beats rock.');
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerWinner++;
        return alert('Good luck next round! Scissor beats paper.');

    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerWinner++;
        return alert('Good luck next round! Rock beats scissor.');
        
    } else {
        tie++;
        return alert('It\'s a tie!');
    }
}

function game() {
    for (i = 0; playerWinner + computerWinner + tie < 5; i++) {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        let computerSelection = getComputerChoice(randomNum);

        getComputerChoice(randomNum);
        playRound(playerSelection, computerSelection);
    }
    if (playerWinner > computerWinner) {
        return alert(`You\'re the game winner!\nYou: ${playerWinner}\nComputer: ${computerWinner}\nTie(s): ${tie}`);

    } else if (playerWinner < computerWinner) {
        return alert(`You're the game loser!\nYou: ${playerWinner})\nComputer: ${computerWinner}\nTie(s): ${tie}`);
    } else {
        return alert(`It's a tie! Both you and the computer won ${playerWinner} rounds\nTie(s): ${tie}`);
    }
}
game();