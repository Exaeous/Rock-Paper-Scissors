"use strict";

// Logic to generate computers choice
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "ROCK";

    case 1:
      return "PAPER";

    case 2:
      return "SCISSORS";
  }
}

// Main logic of the game

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  function playRound(playerSelection, computerSelection) {
    if (
      playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "SCISSORS"
    ) {
      playerScore++;
      return `You Win! Rock beats Scissors. Your score is ${playerScore}`;
    } else if (
      playerSelection.toUpperCase() === "PAPER" &&
      computerSelection === "ROCK"
    ) {
      playerScore++;
      return `You Win! Paper beats Rock. Your score is ${playerScore}`;
    } else if (
      playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "PAPER"
    ) {
      playerScore++;
      return `You Win! Scissors beat Paper. Your score is ${playerScore}`;
    } else if (
      playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "PAPER"
    ) {
      computerScore++;
      return `You Lose! Paper beats Rock. Computer's score is ${computerScore}`;
    } else if (
      playerSelection.toUpperCase() === "PAPER" &&
      computerSelection === "SCISSORS"
    ) {
      computerScore++;
      return `You Lose! Scissors beats Paper. Computer's score is ${computerScore}`;
    } else if (
      playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "ROCK"
    ) {
      computerScore++;
      return `You Lose! Rock beats Scissors. Computer's score is ${computerScore}`;
    } else {
      return "It's a Draw";
    }
  }

  const playerSelection = prompt("Enter Rock, Paper or Scissors:");
  const computerSelection = getComputerChoice();
  console.log("Player Selection:", playerSelection.toUpperCase());
  console.log("Computer Selection:", computerSelection);

  function game() {
    let gameResult = playRound(playerSelection, computerSelection);
    return gameResult;
  }
  console.log(game());
}

console.log(`Player Score is: ${playerScore}`);
console.log(`Computer Score is: ${computerScore}`);
function printScore() {
  if (playerScore > computerScore) {
    return "Player Wins!";
  } else if (computerScore > playerScore) {
    return "Computer Wins!";
  } else {
    return "It's a Draw";
  }
}
console.log(printScore());
