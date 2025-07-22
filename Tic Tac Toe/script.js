const squares = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const restart = document.querySelector(".restart-button");

// console.log(squares);
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = false;
let moves = 9;
let currentTurn = "O";

resetSquare();

restart.addEventListener("click", resetSquare);

function nextMove(e) {
  moves--;
  showMessage(currentTurn);
  currentTurn = turn === true ? "O" : "X";
  turn = !turn;

  if (e.target.innerHTML === "") {
    e.target.innerHTML = currentTurn;
    e.target.removeEventListener("click", nextMove);
  }

  let winMove = false;
  for (let i = 0; i < winner.length; i++) {
    const item = winner[i];

    winMove =
      squares[item[0]].innerHTML === currentTurn &&
      squares[item[1]].innerHTML === currentTurn &&
      squares[item[2]].innerHTML === currentTurn;

    if (winMove === true) {
      showMessage({ win: true, message: currentTurn });
      break;
    }
  }

  if (winMove !== true && moves === 0) {
    showMessage({ win: false, message: "Tie" });
  }
}

function showMessage(messages) {
  if (messages.win === false && moves === 0) {
    message.innerHTML = `${messages.message}! Please Restart`;
    return;
  }

  if (messages.win === true) {
    message.innerHTML = ` Player ${messages.message} has won! Please Restart`;
    squares.forEach((square) => {
      if (square.textContent === "") {
        square.removeEventListener("click", nextMove);
      }
    });
    return;
  }

  message.innerHTML = `Player '${messages}' Turn`;
}

function resetSquare() {
  console.log(moves);
  moves = 9;
  message.innerHTML = "";
  squares.forEach((element) => {
    element.innerHTML = "";
    element.addEventListener("click", nextMove);
  });
}
