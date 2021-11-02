const gameState = {
  player1: 1,
  player2: 1,
};

function updatePosition(gameState, diceRoll, player1Turn) {
  if (player1Turn === true) {
    let newPosition = gameState.player1 + diceRoll;
    gameState.player1 = newPosition;
  } else {
    let newPosition = gameState.player2 + diceRoll;
    gameState.player2 = newPosition;
  }
  return gameState;
}

function determineWinner(gameState) {
  if (gameState.player1 >= 100) {
    return "Player 1 wins";
  } else if (gameState.player2 >= 100) {
    return "Player 2 wins";
  }
}

const LadderCells = {
  7: 17,
  12: 22,
  24: 34,
};

function ladder(updatedPosition) {}
