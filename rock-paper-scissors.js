function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 100);
    if (randomChoice <= 33) {
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
        case "paper":
            if (computerSelection === "paper") {
                return "You win! Paper beats Rock!";
            } else if (computerSelection === "scissors") {
                return "You lose! Scissors beats Paper!";
            } else {
                return "TIE! Try again!";
            }
        case "scissors":
            if (computerSelection === "paper") {
                return "You win! Scissors beats Paper!";
            } else if (computerSelection === "rock") {
                return "You lose! Rock beats Scissors!";
            } else {
                return "TIE! Try again!";
            }
        default:
            return "Invalid input! Please enter rock, paper, or scissors.";
    }
};

function game() {
    const computerSelection = getComputerChoice();
    const result = playRound(computerSelection);

    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}