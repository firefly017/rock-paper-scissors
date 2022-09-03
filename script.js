// randomly generating computer play
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

//playing a single round of game
function playRound(playerSelection, computerSelection) {
  var lowerPlayer = playerSelection.toLowerCase();
  var lowerComputer = computerSelection.toLowerCase();

  if (lowerPlayer == lowerComputer) {
    return "Draw";
  } else if (lowerPlayer == "rock" && lowerComputer == "paper") {
    return "Lose!";
  } else if (lowerPlayer == "rock" && lowerComputer == "scissors") {
    return "Win!";
  } else if (lowerPlayer == "paper" && lowerComputer == "scissors") {
    return "Lose!";
  } else if (lowerPlayer == "paper" && lowerComputer == "rock") {
    return "Win!";
  } else if (lowerPlayer == "scissors" && lowerComputer == "rock") {
    return "Lose!";
  } else if (lowerPlayer == "scissors" && lowerComputer == "paper") {
    return "Win!";
  }
}
// const playerSelection = "rock";
// const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

// playing five round game with score
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("What do you want to input? ");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    while (result == undefined) {
      alert("no valid input!");
      playerSelection = prompt("Watch your spelling");
      result = playRound(playerSelection, computerSelection);
    }
    if (result == "Win!") {
      playerScore++;
    } else if (result == "Lose!") {
      computerScore++;
    }
    console.log(result);
  }
  if (playerScore > computerScore) {
    return "You Win!";
  } else if (computerScore > playerScore) {
    return "You Lose!";
  } else {
    return "Match Draw!";
  }
}
console.log("Final score: " + game());
