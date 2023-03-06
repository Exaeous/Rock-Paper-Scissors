"use strict";

function getComputersChoice() {
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
console.log(getComputersChoice());
