let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 100);
    if (randomChoice <= 33) {
        return "rock";
    } else if (randomChoice <= 66) {
        return "paper";
    } else {
        return "scissors";
    };
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let roundResult;

    if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}...`;
    }

    updateDOM(roundResult);
};

function updateDOM(roundResult) {
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    resultElement.textContent = roundResult;
    scoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
        const winner = playerScore >= 5 ? 'Player' : 'Computer';
        scoreElement.textContent += ` | ${winner} wins the game!`
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));