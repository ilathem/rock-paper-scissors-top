const outcomeDiv = document.querySelector("#outcomeDiv");
const scoreDiv = document.querySelector('#scoreDiv');

const game = {
    player: 0,
    computer: 0,
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    const normalizedPlayerSelection = playerSelection.toLowerCase();
    const normalizedComputerSelection = computerSelection.toLowerCase();

    const winningScenarios = [
        ['paper', 'rock'],
        ['rock', 'scissors'],
        ['scissors', 'paper']
    ]

    const currentScenario = [
        normalizedPlayerSelection, 
        normalizedComputerSelection
    ];

    if (normalizedPlayerSelection === normalizedComputerSelection) 
        outcomeDiv.textContent = `Try Again! You both chose ${normalizedComputerSelection}`
    

    if (!['rock', 'paper', 'scissors'].includes(normalizedPlayerSelection)) 
        outcomeDiv.textContent = `Try Again! ${playerSelection} is not one of the options!`

    let wonRound = false;
    for (const winningScenario of winningScenarios) {
        if (winningScenario[0] === currentScenario[0] &&
            winningScenario[1] === currentScenario[1]) {
            wonRound = true;
        }
    }

    if (wonRound) {
        game.player++;
        outcomeDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        scoreDiv.textContent = `You: ${game.player} --- Computer: ${game.computer}`
        if (game.player === 5) resetGame();
    } else {
        game.computer++;
        outcomeDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        scoreDiv.textContent = `You: ${game.player} --- Computer: ${game.computer}`
        if (game.computer === 5) resetGame();
    }
}

function resetGame() {
    if (game.player === 5) {
        outcomeDiv.textContent = 'Congratulations, you are the rock, paper, scissors champion!';
    } else if (game.computer === 5) {
        outcomeDiv.textContent = 'Sorry, you do not have what it takes to be the rock, paper, scissors, champion...';
    }
    game.player = 0;
    game.computer = 0;
}

document.querySelector("#rockBtn").addEventListener("click", () => {
    playRound('rock', getComputerChoice())
});

document.querySelector("#paperBtn").addEventListener("click", () => {
    playRound('paper', getComputerChoice())
});

document.querySelector("#scissorsBtn").addEventListener("click", () => {
    playRound('scissors', getComputerChoice())
});




