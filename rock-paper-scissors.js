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

function playRound(playerSelection, computerSelection) {
    switch (playerSelection === "rock") {
        case (computerSelection === "Scissors"):
            return "You win! Rock beats Scissors!";
            break;
        case (computerSelection === "Paper"):
            return "You lose! Paper beats Rock!";
            break;
        case (computerSelection === "Rock"):
            return "TIE! Try again!";
            break;
    };

    // switch (playerSelection === "paper") {
    //     case
    // };

    // switch (playerSelection === "scissors") {
    //     case
    // };
}