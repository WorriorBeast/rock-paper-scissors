function getComputerChoice() {
    let compDecision = Math.floor(Math.random() * 3);

    if (compDecision < 1) {
        return compDecision = 'Rock';
    } else if (compDecision >= 1 && compDecision < 2){
        return compDecision = 'Paper';
    } else {
        return compDecision = 'Scissor';
    }
}
