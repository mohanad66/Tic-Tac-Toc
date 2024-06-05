let i = 0;
let O = [];
let X = [];
let l = 0;
let buttons = document.getElementsByClassName("Btn");
let blocks = [];
let title = document.getElementById("title");
function XO(blockPlace, arr) {
  if (i % 2 == 0) {
    buttons[arr].innerText = "O";
    O.push(blockPlace);
  } else {
    buttons[arr].innerText = "X";
    X.push(blockPlace);
  }
  buttons[arr].disabled = true;
  i++;
  Winner();
}

function Winner() {
  let gameBoard = [];
  for (let i = 0; i < 9; i++) {
    gameBoard[i] = buttons[i].innerHTML;
  }

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
    // ...
  
    for (let i = 0; i < winningCombinations.length; i++) {
      const combination = winningCombinations[i];
      if (gameBoard[combination[0]] === gameBoard[combination[1]] && gameBoard[combination[1]] === gameBoard[combination[2]] && gameBoard[combination[0]] !== "") {
        if (gameBoard[combination[0]] === "O") {
          title.innerText = "The Winner is O";
          l =1
        } else {
          title.innerText = "The Winner is X";
          l =1
        }
        // Disable all buttons
        Array.prototype.forEach.call(buttons, function(button) {
          button.disabled = true;
        });
        return;
      }
    }
  
    // Check for a draw
    if (i === 9 && !gameBoard.includes("")) {
      title.innerText = "It's a Draw!";
      l =1
      // Disable all buttons
      Array.prototype.forEach.call(buttons, function(button) {
        button.disabled = true;
      });
    }
}
function reset() {
  if(l==1)
    {
      setTimeout(function() {location.reload();}, 5);
    }

}