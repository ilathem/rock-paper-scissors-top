console.log("Hello world!");

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

    let wonRound = false;
    for (const winningScenario of winningScenarios) {
        if (winningScenario[0] === currentScenario[0] &&
            winningScenario[1] === currentScenario[1]) {
            wonRound = true;
        }
    }

    if (wonRound)
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    else 
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);

}

