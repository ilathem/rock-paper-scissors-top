console.log("Hello world!");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

