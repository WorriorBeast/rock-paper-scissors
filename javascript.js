function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);

    if (computerSelection < 1) {
        return computerSelection = 'rock';

    } else if (computerSelection >= 1 && computerSelection < 2){
        return computerSelection = 'paper';

    } else {
        return computerSelection = 'scissor';
    }
}    

    let playerSelection = prompt('What will you choose: rock, paper, or scissors?', '').toLowerCase();
    