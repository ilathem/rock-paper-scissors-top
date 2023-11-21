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

    if (normalizedPlayerSelection === normalizedComputerSelection) 
        return `Try Again! You both chose ${normalizedComputerSelection}`
    

    if (!['rock', 'paper', 'scissors'].includes(normalizedPlayerSelection)) 
        return `Try Again! ${playerSelection} is not one of the options!`

    let wonRound = false;
    for (const winningScenario of winningScenarios) {
        if (winningScenario[0] === currentScenario[0] &&
            winningScenario[1] === currentScenario[1]) {
            wonRound = true;
        }
    }

    if (wonRound)
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    else 
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);

}

function game() {
    const score = {
        player: 0,
        computer: 0,
    }
    let roundCount = 0;
    let keepGoing = true;
    while (keepGoing) {
        const playerSelection = prompt("Please enter rock, paper, or scissors")
        const result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if (result.includes('Win'))
            score.player++;
        else if (result.includes('Lose'))
            score.computer++;
        if (!result.includes('Try Again')) {
            roundCount++;
        }
        if (roundCount === 5) keepGoing = false;
    }
    if (score.player > score.computer) {
        console.log("Congratulations! You are the Rock, Paper, Scissors Champion!")
    } else {
        console.log("Sorry! You are not the Rock, Paper, Scissors Champion.")
    }
    console.log(`Final score (You - CPU): ${score.player} - ${score.computer}`)
}

game();
