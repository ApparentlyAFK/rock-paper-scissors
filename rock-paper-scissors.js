function getPlayerChoice() {
    return
}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 100);
    if(randomChoice <= 33) {
        return "Rock";
    } else if (randomChoice <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    };
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    return
}