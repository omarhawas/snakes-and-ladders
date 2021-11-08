export function moveLadder(newPosition) {
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

export function moveSnake(newPosition) {
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

export function disableButton(player1Turn, player1Btn, player2Btn) {
  if (player1Turn === true) {
    player2Btn.disabled = true;
    player1Btn.disabled = false;
  } else {
    player1Btn.disabled = true;
    player2Btn.disabled = false;
  }
}
