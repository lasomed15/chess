const chessboard = document.getElementById('chessboard');

let board = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

function drawBoard() {
  chessboard.innerHTML = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
      square.dataset.row = row;
      square.dataset.col = col;
      square.textContent = board[row][col];
      chessboard.appendChild(square);
    }
  }
}

drawBoard();

let selected = null;

chessboard.addEventListener('click', (e) => {
  const square = e.target;
  const row = parseInt(square.dataset.row);
  const col = parseInt(square.dataset.col);

  if (!square.classList.contains('square')) return;

  if (!selected) {
    if (board[row][col] !== '') {
      selected = { row, col };
      square.style.border = '2px solid red';
    }
  } else {
    board[row][col] = board[selected.row][selected.col];
    board[selected.row][selected.col] = '';
    selected = null;
    drawBoard();
  }
});
