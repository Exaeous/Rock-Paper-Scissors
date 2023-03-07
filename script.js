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
for (let i = 0; i < 5; i++) {
  function playRound(playerSelection, computerSelection) {
    if (
      playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "SCISSORS"
    ) {
      return "You Win! Rock beats Scissors";
    } else if (
      playerSelection.toUpperCase() === "PAPER" &&
      computerSelection === "ROCK"
    ) {
      return "You Win! Paper beats Rock";
    } else if (
      playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "PAPER"
    ) {
      return "You Win! Scissors beat Paper";
    } else if (
      playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "PAPER"
    ) {
      return "You Lose! Paper beats Rock";
    } else if (
      playerSelection.toUpperCase() === "PAPER" &&
      computerSelection === "SCISSORS"
    ) {
      return "You Lose! Scissors beats Paper";
    } else if (
      playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection === "ROCK"
    ) {
      return "You Lose! Rock beats Scissors";
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
