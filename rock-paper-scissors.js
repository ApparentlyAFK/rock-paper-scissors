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

function playRound(computerSelection) {
    const inputElement = document.getElementById("textInput");
    const playerSelection = inputElement.value.toLowerCase();

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "Scissors") {
            return "You win! Rock beats Scissors!"
            } else if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock!"
            } else {
            return "TIE! Try again!";
            }
    };
}