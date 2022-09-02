// point b
function computerPlay() {
  let randNum = Math.floor(Math.random() * 3);
  if (randNum == 0) {
    return "Rock";
  } else if (randNum == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
//console.log("the return value is " + computerPlay());

//point c
function playRound(playerSelection, computerSelection) {
  var lowerPlayer = playerSelection.toLowerCase();
  var lowerComputer = computerSelection.toLowerCase();

  if (lowerPlayer == lowerComputer) {
    return "Draw";
  } else if (lowerPlayer == "rock" && lowerComputer == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (lowerPlayer == "rock" && lowerComputer == "scissors") {
    return "you win! Rock beats Scissors";
  } else if (lowerPlayer == "paper" && lowerComputer == "scissors") {
    return "you lose! Scissors beats paper";
  } else if (lowerPlayer == "paper" && lowerComputer == "rock") {
    return "you win! paper beats rock";
  } else if (lowerPlayer == "scissors" && lowerComputer == "rock") {
    return "you lose! Rock beats Scissors";
  } else if (lowerPlayer == "scissors" && lowerComputer == "paper") {
    return "you win! Scissors beats paper";
  }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

// point e

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("What do you want to input? ");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
