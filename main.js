let gameState = {
  player1: 1,
  player2: 1,
  player1Score: 0,
  player2Score: 0,
};

function updatePosition(gameState, dieRoll, player1Turn) {
  if (player1Turn === true) {
    let newPosition = gameState.player1 + dieRoll;
    if (newPosition > 100) {
      newPosition = 100;
    }
    gameState.player1 = newPosition;
  } else {
    let newPosition = gameState.player2 + dieRoll;
    if (newPosition > 100) {
      newPosition = 100;
    }
    gameState.player2 = newPosition;
  }
}

function moveLadder(newPosition) {
  let updatedPosition;
  if (newPosition === 3) {
    updatedPosition = 51;
  } else if (newPosition === 6) {
    updatedPosition = 27;
  } else if (newPosition === 20) {
    updatedPosition = 70;
  } else if (newPosition === 36) {
    updatedPosition = 55;
  } else if (newPosition === 63) {
    updatedPosition = 95;
  } else if (newPosition === 68) {
    updatedPosition = 98;
  } else {
    updatedPosition = newPosition;
  }
  return updatedPosition;
}

function moveSnake(newPosition) {
  let updatedPosition;
  if (newPosition === 25) {
    updatedPosition = 5;
  } else if (newPosition === 34) {
    updatedPosition = 1;
  } else if (newPosition === 47) {
    updatedPosition = 19;
  } else if (newPosition === 65) {
    updatedPosition = 52;
  } else if (newPosition === 87) {
    updatedPosition = 57;
  } else if (newPosition === 91) {
    updatedPosition = 61;
  } else if (newPosition === 99) {
    updatedPosition = 69;
  } else {
    updatedPosition = newPosition;
  }
  return updatedPosition;
}

function rollDie() {
  let num = Math.floor(Math.random() * 6) + 1;
  if (num === 1) {
    die1.style.display = "block";
  } else if (num === 2) {
    die2.style.display = "block";
  } else if (num === 3) {
    die3.style.display = "block";
  } else if (num === 4) {
    die4.style.display = "block";
  } else if (num === 5) {
    die5.style.display = "block";
  } else if (num === 6) {
    die6.style.display = "block";
  }
  return num;
}

let die1 = document.getElementById("dice-1.png");
let die2 = document.getElementById("dice-2.png");
let die3 = document.getElementById("dice-3.png");
let die4 = document.getElementById("dice-4.png");
let die5 = document.getElementById("dice-5.png");
let die6 = document.getElementById("dice-6.png");

let dieArr = [die1, die2, die3, die4, die5, die6];

dieArr.forEach(function (die) {
  die.style.display = "none";
});

let player1Btn = document.getElementById("player1Btn");

let player2Btn = document.getElementById("player2Btn");

player1Btn.addEventListener("click", function (event) {
  let dieRoll = rollDie();
  let player1Turn = true;
  updatePosition(gameState, dieRoll, player1Turn);
  gameState.player1 = moveSnake(gameState.player1);
  gameState.player1 = moveLadder(gameState.player1);
  player1UpdateView();
  disableButton(false);
  determineWinner();
});

player2Btn.addEventListener("click", function (event) {
  let dieRoll = rollDie();
  let player1Turn = false;
  updatePosition(gameState, dieRoll, player1Turn);
  gameState.player2 = moveSnake(gameState.player2);
  gameState.player2 = moveLadder(gameState.player2);
  player2UpdateView();
  disableButton(true);
  determineWinner();
});

//////view//////
let player1 = document.getElementById("player1");

let player2 = document.getElementById("player2");

function player1UpdateView() {
  let position = gameState.player1;
  let positionElement = document.getElementById(position);
  positionElement.appendChild(player1);
}

function player2UpdateView() {
  let position = gameState.player2;
  let positionElement = document.getElementById(position);
  positionElement.appendChild(player2);
}

function disableButton(player1Turn) {
  if (player1Turn === true) {
    player2Btn.disabled = true;
    player1Btn.disabled = false;
  } else {
    player1Btn.disabled = true;
    player2Btn.disabled = false;
  }
}

function init() {
  gameState = {
    player1: 1,
    player2: 1,
  };
  disableButton(true);
  player1UpdateView();
  player2UpdateView();
}

let resetElm = document.getElementById("reset");
resetElm.addEventListener("click", init);

function determineWinner() {
  if (gameState.player1 >= 100) {
    gameState.player1Score++;
    console.log("Player 1 wins");
  } else if (gameState.player2 >= 100) {
    gameState.player2Score++;
    console.log("Player 2 wins");
  }
}
