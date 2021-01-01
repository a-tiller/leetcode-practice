var exist = function(board, word) {

  const dfs = (r, c, i = 0, w = word, b = board) => {
    if (i === w.length) return true;

    if (r < 0 || c < 0 || r >= b.length || c >= b[0].length) return false;

    if (b[r][c] === w[i]) {
      const temp = b[r][c];
      b[r][c] = false;
      if (
        dfs(r + 1, c, i + 1, w, b) ||
        dfs(r - 1, c, i + 1, w, b) ||
        dfs(r, c + 1, i + 1, w, b) ||
        dfs (r, c - 1, i + 1, w, b)
        ) {
          return true;
        }
      b[r][c] = temp;
    }

    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (dfs(row, col)) {
        return true;
      }
    }
  }

  return false;
};

// let board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ];

// let word = "ABCCED";

// console.log(exist(board, word));

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ];

// word = "SEE"

// console.log(exist(board, word));

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ];

// word = "ABCB"

// console.log(exist(board, word));